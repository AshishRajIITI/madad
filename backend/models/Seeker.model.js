const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const seekerSchema = new Schema({
    user: {
        type:Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    address:{
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
    requirements:{
        type:Array,
        required:true,
        unique:false,
        trim:true,
    },
    isCompleted:{
        type:Boolean,
        required:false,        
    },
    comments:{
        type: String,
        trim:true,
    }

},{
    timestamps:true,
});

const Seeker = mongoose.model('seeker', seekerSchema);

module.exports = Seeker;