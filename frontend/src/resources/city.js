import Cities from "./cities";

const City = Cities.map((eachCity)=>{
    return(
      eachCity.city + ', ' +  eachCity.state
    );

  });
  export default City;
