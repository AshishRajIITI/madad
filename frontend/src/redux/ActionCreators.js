import * as ActionTypes from './ActionTypes';
import axios from 'axios';

const fetchDonorRequest = () => ({
    type: ActionTypes.DONOR_LOADING
});
const donorSuccess = (donor) => ({
    type: ActionTypes.ADD_DONOR,
    payload: donor
});
const donorFailed = (err) => ({
    type: ActionTypes.DONOR_FAILED,
    payload: err
});

export const fetchDonor = () => {
    return function (dispatch) {
        dispatch(fetchDonorRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const donors = response.data;
                dispatch(donorSuccess(donors))
            })
            .catch(error => {
                dispatch(donorFailed(error.message))
            })
    }
}


const fetchSeekerRequest = () => ({
    type: ActionTypes.SEEKER_LOADING
});
const seekerSuccess = (donor) => ({
    type: ActionTypes.ADD_SEEKER,
    payload: donor
});
const seekerFailed = (err) => ({
    type: ActionTypes.SEEKER_FAILED,
    payload: err
});

export const fetchSeeker = () => {
    return function (dispatch) {
        dispatch(fetchSeekerRequest());
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const seekers = response.data;
                dispatch(seekerSuccess(seekers))
            })
            .catch(error => {
                dispatch(seekerFailed(error.message))
            })
    }
}