import * as ActionTypes from "./ActionTypes";
import axios from "axios";
//const baseURL = "https://madad-iiti.herokuapp.com";
const baseURL = "http://localhost:5000";

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
				if (response) {
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

export const postSeeker = (body) => {
	return function (dispatch) {
		axios
			.post(baseURL + "/seekers", body)
			.then((response) => {
				if (response) {
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

export const loginUser = (user) => {
	return function (dispatch) {
		axios.post(baseURL + '/user/login', user)
			.then((response) => {
				if (response) {
					console.log("login");
					var user = response.data
					localStorage.setItem('token', user.token);
					localStorage.setItem('creds', user);
					dispatch({ type: ActionTypes.ADD_USER, payload: response.data })
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
				dispatch({ type: ActionTypes.USER_FAILED, payload: 'invalid id' })
			});
	}
};

export const signupUser = (user) => {
	return function (dispatch) {
		axios.post(baseURL + '/user', user)
			.then((response) => {
				if (response) {
					console.log("signeup");
					var user = response.data
					localStorage.setItem('token', user.token);
					localStorage.setItem('creds', user);
					dispatch({ type: ActionTypes.ADD_USER, payload: response.data })
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
				dispatch({ type: ActionTypes.USER_FAILED, payload: 'invalid id' })
			});
	}
};

export const sendOTPrequest = (user) => {
	return function (dispatch) {
		axios.post(baseURL + '/user/otp', user)
			.then((response) => {
				if (response) {
					dispatch({ type: ActionTypes.ADD_OTP, payload: response.data.otp })
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
	}
};
