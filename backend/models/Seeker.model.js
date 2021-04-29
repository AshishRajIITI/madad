const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const seekerSchema = new Schema({
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
        unique:false,
        trim:true,
    },
    address:{
        type:String,
        required:true,
        unique:false,
        trim:true,
    },
    city:{
        type:String,
        required:true,
        unique:false,
        trim:true,
    },
    requirements:{
        type:Array,
        required:true,
        unique:false,
        trim:true,
    },
    isCompleted:{
        type:Boolean,
        required:true,
        unique:false,
        trim:true,
    }
},{
    timestamps:true,
});

const Seeker = mongoose.model('seeker', seekerSchema);

module.exports = Seeker;