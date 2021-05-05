const router = require("express").Router();

let User = require('../models/User.model');

let Seeker = require("../models/Seeker.model");

const jwt = require('jsonwebtoken');

const config = require("../config");
const twitter = require("twitter-lite");
const client = new twitter(config);

router.route("/").get((req, res) => {
    Seeker.find()
        .then((seekerList) => res.json(seekerList))
        .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/").post((req, res) => {

    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.secret, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        User.findById(decoded.id, function (err, result) {
            if (err) {
                res.status(400).send(err);
            } else {
                if (result === null) return res.status(400).send({ auth: false, message: 'User not found' });
                
                const address = req.body.address;
                const city = req.body.city;
                const services = req.body.services;
                const isCompleted = req.body.isCompleted;
                const comments = req.body.comments;
                const extra = req.body.extra; // {key : value}

                const twitter = req.body.twitter; // Boolean - post on twitter or not?
                const facebook = req.body.facebook; // Boolean - post on facebook or not?

                const newSeeker = new Seeker({
                    user: result.id,
                    address: address,
                    city: city,
                    services: services,
                    isCompleted: isCompleted,
                    comments: comments,
                    extra: extra
                });


                const format_requirements = services
                    .toString()
                    .replace('"', "") //remove the quotes
                    .replace(",", " , ") //replace comma with space
                    .replace("[", "") //remove the left bracket
                    .replace("]", ""); //remove the right bracket


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

                    const tweet = `\nName - ${result.name} \nMobile Number - ${result.mobileNumber} \nCity - ${city} \nAddress - ${address} \nRequirements- ${format_requirements} \nDate posted- ${year + "-" + month + "-" + date_ + " " + hours + ":" + minutes
                        } \n\n#COVID19India #IndiaCovidCrisis #CovidIndia`;
                }

                newSeeker
                    .save()
                    .then((new_seeker) => {
                        result.seeker.push(new_seeker._id);
                        result.save();
                        // client
                        //     .post("statuses/update", { status: `${tweet}` })
                        //     .then((result) => {
                        //         // console.log('You successfully tweeted this : "' + result.text + '"');
                        //     })
                        //     .catch((err) => console.error);
                        res.json(newSeeker);
                    })
                    .catch((err) => res.status(400).json("Error" + err));
            }
        });
    });
});


module.exports = router;
