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

    newDonor.save()
    .then(() => res.json(newDonor))
    .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').get((req,res) => {
    Donor.findById(req.params.id)
    .then(donor => res.json(donor))
    .catch((err) => res.status(400).json('Error :' + err));
});

router.route('/:id').delete((req,res) => {
    Donor.findByIdAndDelete(req.params.id)
    .then(donor => res.json('Donor deleted'))
    .catch((err) => res.status(400).json('Error :' + err));
});

router.route('/update/:id').post((req,res) => {
    Donor.findById(req.params.id)
    .then(donor => {
        donor.name =  req.body.name;
        donor.mobileNumber = req.body.mobileNumber;
        donor.email = req.body.email;
        donor.workingRegion = req.body.workingRegion;
        donor.availableFacilities = req.body.workingRegion ;
        donor.comments = req.body.comments;
        donor.date = Date.parse(req.body.date);

        donor.save()
         .then(() => res.json('Donor updated succesfully !'))
         .catch((err) => res.status(400).json('Error :' + err));
    })
    .catch((err) => res.status(400).json('Error :' + err));
});


module.exports =  router;