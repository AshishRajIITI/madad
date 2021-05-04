import * as ActionTypes from './ActionTypes';

const userSchema ={
    name:'',
    email: '',
    mobileNumber:''
}

export const Users = (state = {
    user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
    otp: 0,
    token: localStorage.getItem('token'),
    isAuth: localStorage.getItem('token') ? true : false,
    err: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return { ...state, err: null, user: action.payload, otp:0 , isAuth: true };
       
        case ActionTypes.USER_FAILED:
            return { ...state, err: action.payload, seekers: userSchema, otp: 0, isAuth:false};
        case ActionTypes.ADD_OTP:
                return { ...state, err: null, seekers: userSchema, otp: action.payload, isAuth:false };
        default:
            return state;
    }
}