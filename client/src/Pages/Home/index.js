import React, { useEffect, useState } from "react";
import "./Home.css";
import CountrySearch from '../../Components/CountrySearch'
import AllCountries from '../../Components/AllCountries'

const Home = () => {
    const [country,setCoutry] = useState(null);
    const [conutryList, setConutryList] = useState([]);

    const handleSearchByName = (counrtyName) =>{
        setCoutry(null);
        fetch(`/api/getCountryByName?counrtyName=${counrtyName}`)
        .then((res) => res.json())
        .then((data) => {
            setCoutry(data);
        });
    }

    useEffect(()=>{
        fetch(`/api/getAllCountry`)
        .then((res) => res.json())
        .then((data) => {
            setConutryList(data);
        });
    },[])

    return (
        <div >
           <CountrySearch handleSearch={handleSearchByName} country={country}/>
           <br/>
           <AllCountries countryList={conutryList}/>
        </div>
    )
}

export default Home;