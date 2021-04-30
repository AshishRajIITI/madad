import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeeker} from "../redux/ActionCreators";

function Seekers() {
    const seekerReducer = useSelector(state => state.seekerReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSeeker());
    }, [dispatch]);

    if (seekerReducer.isLoading) {
        return (
            <h1>Loading</h1>
        )
    }
    else if (seekerReducer.err) {
        return (
            <h1>{seekerReducer.err}</h1>
        )
    }
    else if (seekerReducer.seekers != null) {
        const seeker = seekerReducer.seekers.map((seeker) => {
            return (
                <h1>{seeker.title}</h1>
            )
        })
        return (
            <div>
                {seeker}
            </div>
        )
    }
    else {
        return (
            <h1>.</h1>
        )
    }
}


export default Seekers;