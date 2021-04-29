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
        unique:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    workingRegion:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    availableFacilities:{
        type:Array,
        required:true,
        unique:true,
        trim:true,
    }
},{
    timestamps:true,
});

const Donor = mongoose.model('donor', donorSchema);

module.exports = Donor;