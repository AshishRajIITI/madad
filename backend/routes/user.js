const router = require('express').Router();

let User = require('../models/User.model');

const jwt = require('jsonwebtoken');

var unirest = require("unirest");

var rn = require('random-number');
var options = {
    min: 1000
    , max: 9999
    , integer: true
}


router.route('/').get((req, res) => {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.secret, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        User.findById(decoded.id, function (err, result) {
            if (err) {
                res.status(400).send(err);
            } else {
                if (result === null) return res.status(400).send({ auth: false, message: 'User not found' });
                const response = {
                    auth: true,
                    name: result.name,
                    mobileNumber: result.mobileNumber,
                    email: result.email,
                    updatedAt: result.updatedAt
                };
                res.status(200).send(response);
            }
        });
    });
});


router.route('/').post((req, res) => {
    const name = req.body.name;
    const mobileNumber = req.body.mobileNumber;
    const email = req.body.email ? req.body.email : "";
    const password = req.body.password;

    const newUser = new User({
        name: name,
        mobileNumber: mobileNumber,
        email: email,
    });

    newUser.setPassword(password);

    newUser.save()
        .then((user) => {
            res.json(user.toAuthJSON());
        })
        .catch(err => res.status(400).json('Error' + err));
});


router.route('/otp').post((req, res) => {

    const mobileNumber = req.body.mobileNumber;
    const otp = rn(options);

    var reques = unirest("GET", `http://2factor.in/API/V1/${process.env.SMS_API_KEY}/SMS/${mobileNumber}/${otp}/MADAD`);

    reques.headers({
        "content-type": "application/x-www-form-urlencoded"
    });

    reques.form({});

    reques.end(function (result) {
        if (result.error) throw new Error(result.error);
        result.body["otp"] = otp;
        res.send(result.body);
    });
});



router.route('/login').post((req, res) => {
    const mobileNumber = req.body.mobileNumber;
    const password = req.body.password;

    User.findOne({ mobileNumber: mobileNumber }, function (err, result) {
        if (err) {
            res.status(400).send(err);
        } else {
            if (result === null) {
                res.status(400).send({ message: 'User not found' });
            }

            user = result;
            if (!user.validatePassword(password)) {
                res.status(400).send({ message: 'Invalid password' })
            } else {
                res.status(200).send(user.toAuthJSON());
            }
        }
    });
});

module.exports = router;