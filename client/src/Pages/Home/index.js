import React, { useState } from "react";
import "./Home.css";
import CountrySearch from '../../Components/CountrySearch'

const Home = () => {
    const [country,setCoutry] = useState(null);

    const handleSearchByName = (counrtyName) =>{
        setCoutry(null);
        fetch(`/api/getCountryByName?counrtyName=${counrtyName}`)
        .then((res) => res.json())
        .then((data) => {
            setCoutry(data);
        });
    }
    return (
        <div >
           <CountrySearch handleSearch={handleSearchByName} country={country}/>
        </div>
    )
}

export default Home;