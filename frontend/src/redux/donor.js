import * as ActionTypes from './ActionTypes';

export const Donors = (state = {
    isLoading:true,
        errMess: null,
        donors: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DONOR:
            return {...state, isLoading: false, errMess: null, donors: action.payload};
        case ActionTypes.DONOR_FAILED:
            return {...state, isLoading: false, errMess: action.payload, donors: []};
        case ActionTypes.DONOR_LOADING:
            return {...state, isLoading: true, errMess: null , donors: []};
        
        default:
            return state;
    }
}