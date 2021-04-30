const router = require('express').Router();

let Donor = require('../models/Donor.model');

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
    const availableFacilities = req.body.workingRegion ;
    const date = Date.parse(req.body.date);

    const newDonor = new Donor({
        name: name,
        mobileNumber:mobileNumber,
        email: email,
        workingRegion: workingRegion,
        availableFacilities: availableFacilities,
        date:date,
    });

    newDonor.save()
    .then(() => res.json(newDonor))
    .catch(err => res.status(400).json('Error' + err));
});

module.exports =  router;