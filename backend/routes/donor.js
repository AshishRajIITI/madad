const router = require('express').Router();

const DonorAuth = require('../models/Donor.model').donorAuth;
const DonorNonAuth = require('../models/Donor.model').donorNonAuth;

let User = require('../models/User.model');

const jwt = require('jsonwebtoken');

const config = require('../config');
const twitter = require('twitter-lite');
const client = new twitter(config);



router.route('/').get(async (req, res) => {

    var donorList = [];

    const donorAuthList = await DonorAuth.find({ status: true, isActive: true }).populate('user', ['name', 'mobileNumber', 'email']);
    const donorNonAuthList = await DonorNonAuth.find({ status: true, isActive: true }).populate('user', ['name', 'mobileNumber', 'email']);

    donorList = donorList.concat(donorAuthList);
    donorList = donorList.concat(donorNonAuthList);

    res.status(200).send(donorList);
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

                const city = req.body.city;
                const services = req.body.services;
                const comments = req.body.comments;
                const extra = req.body.extra; // {key : value}
                const status = req.body.status; // Boolean
                const twitter = req.body.twitter; // Boolean - post on twitter or not?
                const facebook = req.body.facebook; // Boolean - post on facebook or not?
                const donorType = req.body.donorType; // "donorAuth" or "donorNonAuth"

                const organizationName = req.body.organizationName;

                var newDonor;

                if (donorType === 'donorAuth') {
                    newDonor = new DonorAuth({
                        user: result.id,
                        city: city,
                        services: services,
                        comments: comments,
                        extra: extra,
                        status: status,
                        organizationName: organizationName
                    });
                } else {
                    newDonor = new DonorNonAuth({
                        user: result.id,
                        city: city,
                        services: services,
                        comments: comments,
                        extra: extra,
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

                    const tweet = `\nName - ${decoded.name} \nMobile Number - ${decoded.mobileNumber} \nCities - ${city}  \nFacilities- ${services} \nDate posted- ${year + "-" + month + "-" + date_ + " " + hours + ":" + minutes} \n\n#COVID19India #IndiaCovidCrisis #CovidIndia`;
                }

                newDonor.save()
                    .then((new_donor) => {
                        if (donorType === 'donorAuth') {
                            result.donorAuth.push(new_donor._id);
                        } else {
                            result.donorNonAuth.push(new_donor._id);
                        }
                        result.save();
                        if (twitter) {
                            client.post('statuses/update', { status: `${tweet}` }).then((result) => {
                                // console.log('You successfully tweeted this : "' + result.text + '"');
                            }).catch(err => console.error);
                        }
                        console.log(newDonor);
                        res.json(newDonor)
                    }
                    )
                    .catch(err => res.status(400).json('Error' + err));
            }
        });
    });
});

router.route('/:id').put((req, res) => {

    const id = req.params.id;

    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.secret, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        User.findById(decoded.id, function (err, user) {
            if (err) {
                res.status(400).send(err);
            } else {
                if (user === null) return res.status(400).send({ auth: false, message: 'User not found' });

                const donorAuthList = user.donorAuth;
                const donorAuthcheck = donorAuthList.includes(id);

                const donorNonAuthList = user.donorNonAuth;
                const donorNonAuthcheck = donorNonAuthList.includes(id);

                if (donorAuthcheck) {
                    DonorAuth.findById(id, function (err, donor_object) {
                        if (err) {
                            res.status(400).send(err);
                        }
                        else {
                            donor_object.city = req.body.city ? req.body.city : donor_object.city;
                            donor_object.organizationName = req.body.organizationName ? req.body.organizationName : donor_object.organizationName;
                            donor_object.services = req.body.services ? req.body.services : donor_object.services;
                            donor_object.comments = req.body.comments ? req.body.comments : donor_object.comments;
                            donor_object.extra = req.body.extra ? req.body.extra : donor_object.extra;
                            donor_object.isActive = req.body.isActive ? req.body.isActive : donor_object.isActive;
                            donor_object.save(() => {
                                res.status(200).send({ message: 'Updated Successfully' });
                            });
                        }
                    });

                } else if (donorNonAuthcheck) {
                    DonorNonAuth.findById(id, function (err, donor_object) {
                        if (err) {
                            res.status(400).send(err);
                        }
                        else {
                            donor_object.city = req.body.city ? req.body.city : donor_object.city;
                            donor_object.services = req.body.services ? req.body.services : donor_object.services;
                            donor_object.comments = req.body.comments ? req.body.comments : donor_object.comments;
                            donor_object.extra = req.body.extra ? req.body.extra : donor_object.extra;
                            donor_object.isActive = req.body.isActive ? req.body.isActive : donor_object.isActive;
                            donor_object.save(() => {
                                res.status(200).send({ message: 'Updated Successfully' });
                            });
                        }
                    });
                } else {
                    res.status(400).send({ message: 'Update Denied' });
                }
            }
        });
    });
});


module.exports = router;