import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonor} from "../redux/ActionCreators";

function Donors() {
    const donorReducer = useSelector(state => state.donorReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDonor());
    }, [dispatch]);

    if (donorReducer.isLoading) {
        return (
            <h1>Loading</h1>
        )
    }
    else if (donorReducer.err) {
        return (
            <h1>{donorReducer.err}</h1>
        )
    }
    else if (donorReducer.donors != null) {
        const donor = donorReducer.donors.map((donor) => {
            return (
                <h1>{donor.title}</h1>
            )
        })
        return (
            <div>
                {donor}
            </div>
        )
    }
    else {
        return (
            <h1>.</h1>
        )
    }
}


export default Donors;