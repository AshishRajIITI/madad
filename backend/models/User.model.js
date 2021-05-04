const mongoose =require('mongoose');

const crypto = require('crypto');

const jwt = require('jsonwebtoken');
const secret = process.env.secret;

const Schema= mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:false,
        trim:true,
    },
    mobileNumber:{
        type:String,
        required:true,
        unique:true,
        // match:[/[0-9]{10}/, 'is invalid'],
        trim:true,
    },
    email:{
        type:String,
        required:false,
        unique:false,
        trim:true,
    },
    donor: [{
        type:Schema.Types.ObjectId,
        ref: "donor"
    }],
    seeker: [{
        type:Schema.Types.ObjectId,
        ref: "seeker"
    }],
    hash:String,
    salt:String   
},{
    timestamps:true,
});


UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
}

UserSchema.methods.validatePassword = function(password) {
     var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
     return this.hash === hash;
    };


UserSchema.methods.generateJWT = function() {
    //  var today = new Date();
    //  var exp = new Date(today);
    //  exp.setDate(today.getDate() + 30);
       return jwt.sign({
       id: this._id,
       mobileNumber: this.mobileNumber,
    //    exp: parseInt(exp.getTime() / 1000),
       }, secret , {
           expiresIn: 2592000, //seconds (30 days)
       });
    };

UserSchema.methods.toAuthJSON = function(){
      return {
          name:this.name,
          mobileNumber: this.mobileNumber,
          email: this.email,
          token: this.generateJWT(),
        };
    };

const User = mongoose.model('User', UserSchema);

module.exports = User;
