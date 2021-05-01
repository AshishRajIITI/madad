const router = require('express').Router();

let Seeker = require('../models/Seeker.model');

router.route('/').get((req,res)=>{
    Seeker.find()
    .then(seekerList => res.json(seekerList))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/').post((req,res) =>{
    const name =  req.body.name;
    const mobileNumber = req.body.mobileNumber;
    const email = req.body.email;
    const address = req.body.address;
    const city = req.body.city ;
    const requirements = req.body.requirements;
    const isCompleted = req.body.isCompleted;
    const comments = req.body.comments;
    const date = Date.parse(req.body.date);

    const newSeeker = new Seeker({
        name,
        mobileNumber,
        email,
        address,
        city,
        requirements,
        isCompleted,
        comments,
        date,
    });

    newSeeker.save()
    .then(() => res.json(newSeeker))
    .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').get((req,res) => {
    Seeker.findById(req.params.id)
    .then(seeker => res.json(seeker))
    .catch((err) => res.status(400).json('Error :' + err));
});

router.route('/:id').delete((req,res) => {
    Seeker.findByIdAndDelete(req.params.id)
    .then(seeker => res.json('Donor deleted'))
    .catch((err) => res.status(400).json('Error :' + err));
});

router.route('/update/:id').post((req,res) => {
    Donor.findById(req.params.id)
    .then(seeker => {
        seeker.name =  req.body.name;
        seeker.mobileNumber = req.body.mobileNumber;
        seeker.email = req.body.email;
        seeker.address = req.body.address;
        seeker.city = req.body.city ;
        seeker.requirements = req.body.requirements;
        seeker.isCompleted = req.body.isCompleted;
        seeker.comments = req.body.comments;
        seeker.date = Date.parse(req.body.date);

        seeker.save()
         .then(() => res.json('Seeker updated succesfully !'))
         .catch((err) => res.status(400).json('Error :' + err));
    })
    .catch((err) => res.status(400).json('Error :' + err));
});



module.exports =  router;