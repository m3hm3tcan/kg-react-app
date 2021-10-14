import React, { useEffect, useState } from "react";
import "./Home.css";
import CountrySearch from '../../Components/CountrySearch'
import AllCountries from '../../Components/AllCountries'
import CountryListByArray from '../../Components/CountryListByArray'

const Home = () => {
    const [country, setCoutry] = useState(null);
    const [conutryList, setConutryList] = useState([]);
    const [conutryArrayList, setConutryArrayList] = useState([]);

    useEffect(() => {
        fetch(`/api/getAllCountry`)
            .then((res) => res.json())
            .then((data) => {
                setConutryList(data);
            });
    }, [])

    const handleSearchByName = (counrtyName) => {
        setCoutry(null);
        fetch(`/api/getCountryByName?counrtyName=${counrtyName}`)
            .then((res) => res.json())
            .then((data) => {
                setCoutry(data);
            });
    }

    const handleSearchByArray = (counrtyNameList) => {
        setConutryArrayList([]);
        if (counrtyNameList !== '') {
            fetch(`/api/getListOfCountry?conutryNames=${counrtyNameList}`)
                .then((res) => res.json())
                .then((data) => {
                    setConutryArrayList(data);
                });
        }
    }

    return (
        <div >
            <CountrySearch handleSearch={handleSearchByName} country={country} />
            <br />
            <AllCountries countryList={conutryList} />
            <br />
            <CountryListByArray handleSearch={handleSearchByArray} countryArrayList={conutryArrayList}/>
        </div>
    )
}

export default Home;