const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const donorNonAuthSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    city: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    services: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    comments: {
        type: String,
    },
    extra: [
        {
            key: String,
            value: String
        }
    ],
    statusVer: {        //verification status
        type: String,
        enum: ['Non-verified', 'Pending', 'Verified'],
        default: 'Verified'
    },
    status: {           //working status
        type: String,
        enum: ['Active', 'Non-active'],
        default: 'Active'
    }
}, {
    timestamps: true,
});

const donorAuthSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    organizationName: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    services: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    comments: {
        type: String,
    },
    extra: [
        {
            key: String,
            value: String
        }
    ],
    statusVer: {
        type: String,
        enum: ['Non-verified', 'Pending', 'Verified'],
        default: 'Non-verified'
    },
    status: {           //working status
        type: String,
        enum: ['Active', 'Non-active'],
        default: 'Active'
    }
}, {
    timestamps: true,
});


const DonorNonAuth = mongoose.model('donorNonAuth', donorNonAuthSchema);
const DonorAuth = mongoose.model('donorAuth', donorAuthSchema);

module.exports = {
    donorNonAuth: DonorNonAuth,
    donorAuth: DonorAuth
};