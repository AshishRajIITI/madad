const router = require('express').Router();

let Authorisation = require('../models/authorisation.model');

const config = require('../config');

router.route('/').get((req,res)=>{
    Authorisation.find({email: req.body.email})
    .then(authorList => res.json(authorList))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/').post((req,res) =>{
    const name =  req.body.name;
    const mobileNumber = req.body.mobileNumber;
    const email = req.body.email;
    const city = req.body.city;
    const tokenId = req.body.tokenId;
    
    const newAuthorisation = new Authorisation({
        name: name,
        mobileNumber:mobileNumber,
        email: email,
        city: city,
        tokenId: tokenId,
    });

    newAuthorisation.save()
    .then(() => {
        res.json(newDonor)}
        )
    .catch(err => res.status(400).json('Error' + err));
});

module.exports =  router;