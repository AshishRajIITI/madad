const mongoose =require('mongoose');

const Schema= mongoose.Schema;

const donorSchema = new Schema({
    user: {
        type:Schema.Types.ObjectId,
        ref: 'User',
        required:true
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
    },
    comments:{
        type:String,
        trim:true,
    }
},{
    timestamps:true,
});

const Donor = mongoose.model('donor', donorSchema);

module.exports = Donor;