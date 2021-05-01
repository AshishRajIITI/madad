const router = require('express').Router();

let Seeker = require('../models/Seeker.model');

const config = require('../twitter/config');
const twitter = require('twitter-lite');
const client = new twitter(config);

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

    const newSeeker = new Seeker({
        name,
        mobileNumber,
        email,
        address,
        city,
        requirements,
        isCompleted,
        comments,
    });

    const format_requirements = requirements.toString()
    .replace('"', "")   //remove the quotes
    .replace(',', " , ")  //replace comma with space 
    .replace("[", "")  //remove the left bracket
    .replace("]", "");  //remove the right bracket
    
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

    const tweet = `\nName - ${name} \nMobile Number - ${mobileNumber} \nCity - ${city} \nAddress - ${address} \nRequirements- ${format_requirements} \nDate posted- ${year + "-" + month + "-" + date_ + " " + hours + ":" + minutes} \n\n#COVID19India #IndiaCovidCrisis #CovidIndia`;

    newSeeker.save()
    .then(()=> {
        client.post('statuses/update', { status: `${tweet}` }).then((result) => {
            // console.log('You successfully tweeted this : "' + result.text + '"');
          }).catch(err => console.error);
        res.json(newSeeker);
        
    })
    .catch(err => res.status(400).json('Error' + err));
});

module.exports =  router;