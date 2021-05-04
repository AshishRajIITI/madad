const router = require('express').Router();

let Donor = require('../models/Donor.model');

let User = require('../models/User.model');

const jwt = require('jsonwebtoken');

const config = require('../config');
const twitter = require('twitter-lite');
const client = new twitter(config);

router.route('/').get((req, res) => {
    Donor.find()
        .then(donorList => res.json(donorList))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/').post((req, res) => {

    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.secret, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        User.findById(decoded.id , function (err, result) {
            if (err) {
                res.status(400).send(err);
            } else {
                if (result === null) return res.status(400).send({ auth: false, message: 'User not found' });
                const workingRegion = req.body.workingRegion;
                const availableFacilities = req.body.availableFacilities;
                const comments = req.body.comments;

                const newDonor = new Donor({
                    user: result.id,
                    workingRegion: workingRegion,
                    availableFacilities: availableFacilities,
                    comments: comments,
                });


                let date_ob = new Date();

                // current date
                // adjust 0 before single digit date
                let date_ = ("0" + date_ob.getDate()).slice(-2);

                // current month
                let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

                // current year
                let year = date_ob.getFullYear();

                // current hours
                let hours = date_ob.getHours();

                // current minutes
                let minutes = date_ob.getMinutes();

                const tweet = `\nName - ${decoded.name} \nMobile Number - ${decoded.mobileNumber} \nCities - ${workingRegion}  \nFacilities- ${availableFacilities} \nDate posted- ${year + "-" + month + "-" + date_ + " " + hours + ":" + minutes} \n\n#COVID19India #IndiaCovidCrisis #CovidIndia`;

                newDonor.save()
                    .then((new_donor) => {
                        result.donor.push(new_donor);
                        result.save();
                        client.post('statuses/update', { status: `${tweet}` }).then((result) => {
                            // console.log('You successfully tweeted this : "' + result.text + '"');
                        }).catch(err => console.error);
                        res.json(newDonor)
                    }
                    )
                    .catch(err => res.status(400).json('Error' + err));
            }
        });
    });
});

module.exports = router;