const router = require('express').Router();

let Donor = require('../models/Donor.model');

const config = require('../config');
const twitter = require('twitter-lite');
const client = new twitter(config);

router.route('/').get((req,res)=>{
    Donor.find()
    .then(donorList => res.json(donorList))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/').post((req,res) =>{
    const name =  req.body.name;
    const mobileNumber = req.body.mobileNumber;
    const email = req.body.email;
    const workingRegion = req.body.workingRegion;
    const availableFacilities = req.body.availableFacilities;
    const comments = req.body.comments;

    const newDonor = new Donor({
        name: name,
        mobileNumber:mobileNumber,
        email: email,
        workingRegion: workingRegion,
        availableFacilities: availableFacilities,
        comments:comments,
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

    const tweet = `\nName - ${name} \nMobile Number - ${mobileNumber} \nCities - ${workingRegion}  \nFacilities- ${availableFacilities} \nDate posted- ${year + "-" + month + "-" + date_ + " " + hours + ":" + minutes} \n\n#COVID19India #IndiaCovidCrisis #CovidIndia`;


    newDonor.save()
    .then(() => {
        client.post('statuses/update', { status: `${tweet}` }).then((result) => {
            // console.log('You successfully tweeted this : "' + result.text + '"');
          }).catch(err => console.error);
        res.json(newDonor)}
        )
    .catch(err => res.status(400).json('Error' + err));
});

module.exports =  router;