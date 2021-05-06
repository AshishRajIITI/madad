import * as ActionTypes from "./ActionTypes";
import axios from "axios";
const baseURL = "https://madad-iiti.herokuapp.com";
//const baseURL = "http://localhost:5000";

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
	const token = localStorage.getItem('token');
	return function (dispatch) {
		axios
			.post(baseURL + "/donors", body, { headers: { "x-access-token": token } })
			.then((response) => {
				if (response) {
					console.log("posted");
					alert("Successfully Registered! Our team will validate it soon");
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
	const token = localStorage.getItem('token');
	console.log(body, token);
	return function (dispatch) {
		axios
			.post(baseURL + "/seekers", body, { headers: { "x-access-token": token }})
			.then((response) => {
				if (response) {
					console.log("posted");
					alert("Successfully Request Placed!");
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
export const fetchUser = (token) => {
	return function (dispatch) {
		axios.get(baseURL + '/user', { headers: { "x-access-token": token } })
			.then((response) => {
				if (response) {
					const userR = response.data;
					localStorage.setItem('creds', JSON.stringify(userR));
					dispatch({ type: ActionTypes.ADD_USER, user: userR, token: token })
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
}

export const loginUser = (user) => {
	return function (dispatch) {
		axios.post(baseURL + '/user/login', user)
			.then((response) => {
				if (response) {
					console.log("login");
					var userR = response.data;
					localStorage.setItem('token', userR.token);
					dispatch(fetchUser(userR.token));
					alert("Successfully Signed In");
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

export const signupUser = (user, toggleModal) => {
	// console.log("sign up call");
	return function (dispatch) {
		axios.post(baseURL + '/user', user)
			.then((response) => {
				if (response) {
					// console.log("signeup");
					var user = response.data
					localStorage.setItem('token', user.token);
					dispatch(fetchUser(user.token));
					alert("Successfully SignedUp");
					toggleModal();
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
				dispatch({ type: ActionTypes.USER_FAILED, payload: error.message })
			});
	}
};

export const sendOTPrequest = (mob, toggleModal) => {
	
	return function (dispatch) {
		axios.post(baseURL + '/user/otp', mob)
			.then((response) => {
				if (response) {
					const rest = response.data;
// console.log(rest);
					if(!rest.isRepeat)
					{
						alert("Otp is sent to your registered mobile no: ", mob.mobileNumber);
						dispatch({ type: ActionTypes.ADD_OTP, payload: rest.otp });
					}
					else
					{
						// alert("User already exists! Please login to continue");
						toggleModal();
						dispatch({ type: ActionTypes.USER_FAILED, err: "User Exist" });
					}
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
				dispatch({ tyep: ActionTypes.USER_FAILED, err: error.message });
			});
	}
};

export const logOutUser = () => {
	return function (dispatch) {
		localStorage.removeItem('token');
		localStorage.removeItem('creds')
		dispatch({ type: ActionTypes.USER_FAILED, payload: "logout" })

	}
}


