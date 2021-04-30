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
    const date = Date.parse(req.body.date);

    const newSeeker = new Seeker({
        name,
        mobileNumber,
        email,
        address,
        city,
        requirements,
        isCompleted,
        date,
    });

    newSeeker.save()
    .then(() => res.json(newSeeker))
    .catch(err => res.status(400).json('Error' + err));
});

module.exports =  router;