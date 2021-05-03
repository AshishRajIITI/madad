const router = require('express').Router();

let User = require('../models/User.model');

const jwt = require('jsonwebtoken');

router.route('/').get((req,res)=>{
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, process.env.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    User.findById(decoded.id, function(err , result){
        if (err) {
            res.status(400).send(err);
        }else{
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


router.route('/').post((req,res) =>{
    const name =  req.body.name;
    const mobileNumber = req.body.mobileNumber;
    const email = req.body.email ? req.body.email : "";
    const password = req.body.password;

    const newUser = new User({
        name: name,
        mobileNumber:mobileNumber,
        email: email,
    });

    newUser.setPassword(password);

    newUser.save()
    .then((user) => {
        res.json(user.toAuthJSON());
    })
    .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;