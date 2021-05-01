import * as ActionTypes from "./ActionTypes";
import axios from "axios";
const baseURL = "https://madad-iiti.herokuapp.com";
// const baseURL = "http://localhost:5000";

const fetchDonorRequest = () => ({
	type: ActionTypes.DONOR_LOADING,
});
const donorSuccess = (donor) => ({
	type: ActionTypes.ADD_DONOR,
	payload: donor,
});
const donorFailed = (err) => ({
	type: ActionTypes.DONOR_FAILED,
	payload: err,
});

export const fetchDonor = () => {
	return function (dispatch) {
		dispatch(fetchDonorRequest());
		axios
			.get(baseURL + "/donors")
			.then((response) => {
				const donors = response.data;
				dispatch(donorSuccess(donors));
			})
			.catch((error) => {
				dispatch(donorFailed(error.message));
			});
	};
};

const fetchSeekerRequest = () => ({
	type: ActionTypes.SEEKER_LOADING,
});
const seekerSuccess = (donor) => ({
	type: ActionTypes.ADD_SEEKER,
	payload: donor,
});
const seekerFailed = (err) => ({
	type: ActionTypes.SEEKER_FAILED,
	payload: err,
});

export const fetchSeeker = () => {
	return function (dispatch) {
		dispatch(fetchSeekerRequest());
		axios
			.get(baseURL + "/seekers")
			.then((response) => {
				const seekers = response.data;
				dispatch(seekerSuccess(seekers));
			})
			.catch((error) => {
				dispatch(seekerFailed(error.message));
			});
	};
};

export const postDonor = (body) => {
	return function (dispatch) {
		axios
			.post(baseURL + "/donors", body)
			.then((response) => {
				if (response.ok) {
					console.log("posted");
				} else {
					var error = new Error(
						"Error " + response.status + ": " + response.statusText
					);
					error.response = response;
					throw error;
				}
			})
			.catch((error) => {
				console.log(error.message);
			});
	};
};
