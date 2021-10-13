import React, { useEffect, useState } from "react";
import "./CountrySearch.css";

const CountrySearch = ({ handleSearch, country }) => {
    const [seachText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (event) => {
        setSearchText(event.target.value)
    }

    const handleClick = () => {
        setIsLoading(false);
        handleSearch(seachText);
    }

    useEffect(()=>{
        console.log(country);
    },[country])
    
    return (
        <div className="container">
            <div className="jumbotron">
                <h3>Country Seacrh</h3>
                <p>Get exact coutry name,capital city and currencies by searching from input filed!</p>
            </div>
            <div className="form-group">
                <input type="text" className="search-box" value={seachText} onChange={handleChange} placeholder="Search here" />
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={handleClick}>Search</button>
            </div>

            {country !== null && 
                <div className="result-area">
                    <p className="label">{` ${country[0].name} Capital City: ${country[0].capital}  Currency: ${country[0].currencies[0].name} `}  </p>
                </div>
            }

        </div>
    )
}

export default CountrySearch;