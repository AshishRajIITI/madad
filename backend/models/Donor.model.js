const mongoose =require('mongoose');

const Schema= mongoose.Schema;

const donorSchema = new Schema({
    name:{
        type:String,
        required:true,
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
    workingRegion:{
        type:String,
        required:true,
        unique:false,
        trim:true,
    },
    availableFacilities:{
        type:Array,
        required:true,
        unique:false,
        trim:true,
    }
},{
    timestamps:true,
});

const Donor = mongoose.model('donor', donorSchema);

module.exports = Donor;