import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeeker} from "../redux/ActionCreators";
import Loading from "./Loading";
import SeekerCard from './SeekerCard';
import { Container } from "reactstrap";
import {Row, Col} from "reactstrap";

function Seekers() {
    const seekerReducer = useSelector(state => state.seekerReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSeeker());
    }, [dispatch]);

    if (seekerReducer.isLoading) {
        return (
            <Loading />
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
                <Col className="mt-2 mb-2" md="4">
                   <SeekerCard seeker={seeker} />
                </Col>
                
            )
        })
        return (
            <div>
                <Container className="container-fluid  justify-center mt-2 mb-2">
                    <Row>
                      {seeker}
                    </Row>
                </Container>
                
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