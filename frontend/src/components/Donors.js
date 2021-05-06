import React, { useState, useEffect } from 'react';
import AutoSuggest from './AutoSuggest';
import city from '../resources/city';
import facility from '../resources/facilty';
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import DonorCard from './DonorCard';
import { fetchDonor } from '../redux/ActionCreators';
import { FaSearch } from 'react-icons/fa';
import Loading from './Loading';

function Donors() {

    const donor = useSelector((state) => state.donorReducer.donors);
    const isLoading = useSelector((state) => state.donorReducer.isLoading);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDonor());
    }, [dispatch]);
    const [searched, setSearch] = useState([]);
    const [cityS, setCityS] = useState('');
    const [facilityS, setFacilityS] = useState();
    const [touch, setTouch] = useState(0);





    function handleSearch() {
        var temp = [];
        temp = donor.filter(v => v.city.toString().search(cityS) !== -1);
        var temp2 = [];
        temp2 = temp.filter(v => v.services.search(facilityS) !== -1);
        setSearch(temp2);
        setTouch(touch + 1);
    }

    const item = searched.map(d => {
        return (
            <div key={d._id} className="col-md-4 mt-2 mb-2" >
                <DonorCard donor={d} />
            </div>
        )
    }).reverse();

    const initialDonor = donor.map(d => {

        return (
            <div key={d._id} className="col-md-4 mt-2 mb-2" >
                <DonorCard donor={d} />
            </div>
        )
    }).reverse();



    return (
        <div className="container">
            <div className="m-sticky">
                <div className="row mt-1 b-bottom">
                    <div className="col-6 col-sm-5">
                        <AutoSuggest text={cityS} setText={setCityS} sug={city} placeHolder="Search City" />
                    </div>
                    <div className="col-6 col-sm-5">
                        <AutoSuggest text={facilityS} setText={setFacilityS} sug={facility} placeHolder="Search Facility" />
                    </div>
                    <div className="col-12 col-sm-2">
                        <Button className="" onClick={handleSearch} color="primary" block ><FaSearch /> Search</Button>
                    </div>
                </div>
            </div>
            <div className="row mt-3 justify-content-center">
                {touch === 0 ? (isLoading ? <Loading /> : initialDonor) : (searched.length > 0 ? item : <h1>No Result</h1>)}
            </div>
        </div>
    );
}

export default Donors;