const router = require('express').Router();

const DonorAuth = require('../models/Donor.model').donorAuth;
const DonorNonAuth = require('../models/Donor.model').donorNonAuth;

let User = require('../models/User.model');

const jwt = require('jsonwebtoken');

const config = require('../config');
const twitter = require('twitter-lite');
const client = new twitter(config);



router.route('/').get(async (req, res) => {

    const donorAuthList = await DonorAuth.find();
    const donorNonAuthList = await DonorNonAuth.find();

    res.status(200).send(donorAuthList.concat(donorNonAuthList));
});


router.route('/').post((req, res) => {

    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.secret, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        User.findById(decoded.id, function (err, result) {
            if (err) {
                res.status(400).send(err);
            } else {
                if (result === null) return res.status(400).send({ auth: false, message: 'User not found' });

                const workingRegion = req.body.workingRegion;
                const availableFacilities = req.body.availableFacilities;
                const comments = req.body.comments;
                const status = req.body.status; // Choices - "Non-verified" , "Pending" , "Verified"
                const twitter = req.body.twitter; // Boolean - post on twitter or not?
                const facebook = req.body.facebook; // Boolean - post on facebook or not?
                const donorType = req.body.donorType; // "donorAuth" or "donorNonAuth"

                const organizationName = req.body.organizationName;

                var newDonor;

                if (donorType === 'donorAuth') {
                    newDonor = new DonorAuth({
                        user: result.id,
                        workingRegion: workingRegion,
                        availableFacilities: availableFacilities,
                        comments: comments,
                        status: status,
                        organizationName: organizationName
                    });
                } else {
                    newDonor = new DonorNonAuth({
                        user: result.id,
                        workingRegion: workingRegion,
                        availableFacilities: availableFacilities,
                        comments: comments,
                        status: status,
                    });
                }

                if (twitter) {
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
                }

                newDonor.save()
                    .then((new_donor) => {
                        result.donor.push(new_donor._id);
                        result.save();
                        if (twitter) {
                            client.post('statuses/update', { status: `${tweet}` }).then((result) => {
                                // console.log('You successfully tweeted this : "' + result.text + '"');
                            }).catch(err => console.error);
                        }
                        res.json(newDonor)
                    }
                    )
                    .catch(err => res.status(400).json('Error' + err));
            }
        });
    });
});

module.exports = router;