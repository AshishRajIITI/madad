const mongoose =require('mongoose');

const Schema= mongoose.Schema;

const authorisationSchema = new Schema({
    name:{
        type:String,
        required:false,
        unique:false,
        trim:true,
    },
    mobileNumber:{
        type:String,
        required:true,
        unique:false,
        trim:true,
    },
    email:{
        type:String,
        required:false,
        unique:false,
        trim:true,
    },
    city:{
        type:String,
        required:true,
        unique:false,
        trim:true,
    },
    tokenId:{
        type:string,
        required:true,
        unique:false,
        trim:true,
    },
},{
    timestamps:true,
});

const authorisation = mongoose.model('donor', authorisationSchema);

module.exports = authorisation;