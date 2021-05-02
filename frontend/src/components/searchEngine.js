import React, { useState, useEffect } from 'react';
import AutoSuggest from './AutoSuggest';
import city from '../resources/city';
import facility from '../resources/facilty';
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import DonorCard from './DonorCard';
import {fetchDonor} from '../redux/ActionCreators';

function SearchEngine(props) {
    const donor = useSelector((state)=>state.donorReducer.donors);
    const [cityS, setCityS] = useState('');
    const [facilityS, setFacilityS] = useState('');
    const [searched, setSearch] = useState([]);
const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDonor());
    }, [dispatch]);



    function handleSearch(){
var temp=[];
 temp = donor.filter(v=>v.workingRegion.toString().search(cityS)!==-1);
var temp2=[];
temp2 = temp.filter(v=>v.availableFacilities.toString().search(facilityS)!==-1);
setSearch(temp2);
    }
        
    const item = searched.map(d=>{
            return(
                <div className="col-md-4 mt-2 mb-2" >
                <DonorCard donor={d} />
                </div>
            )
    })


    return (
        <div className="container-fluid">
        <div className="container">
            <div className="row mt-1">
            <div className="col-12 col-sm-6">
                <AutoSuggest text={cityS} setText={setCityS} sug={city} placeHolder="Search City" />
            </div>
            <div className="col-12 col-sm-6">
                <AutoSuggest text={facilityS} setText={setFacilityS} sug={facility} placeHolder="Search Facility" />
            </div>
            </div>
            <div className="row">
               <Button onClick={handleSearch} color="primary" block >Search</Button>
            </div>
        </div>
        <div className="mt-3">
            {item}
        </div>
        </div>
    );
}

export default SearchEngine;