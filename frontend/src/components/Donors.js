import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "reactstrap";
import {Row, Col} from "reactstrap";
import { fetchDonor } from "../redux/ActionCreators";
import DonorCard from "./DonorCard";
import Loading from "./Loading";

function Donors() {
    const donorReducer = useSelector(state => state.donorReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDonor());
    }, [dispatch]);

    if (donorReducer.isLoading) {
        return (
            <Loading />
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
                <Col className="mt-2 mb-2" md={4} >
                  <DonorCard donor={donor} />
                </Col>
            )
        })
        return (
            <Container className= "container-fluid  justify-center mt-2 mb-2" >
                    <Row>                        
                           {donor}                        
                    </Row>
                </Container>
        )
    }
    else {
        return (
            <h1>.</h1>
        )
    }
}


export default Donors;