import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import "./Home.css";
import CountrySearch from '../../Components/CountrySearch'
import AllCountries from '../../Components/AllCountries'
import CountryListByArray from '../../Components/CountryListByArray'
import Header from '../../Components/Header'
import { getAllConutries, getConutryByName, getCountryListByStringArray } from '../../Services/DataServices'

const Home = () => {
    const history = useHistory()

    const [country, setCoutry] = useState(null);
    const [conutryList, setConutryList] = useState([]);
    const [conutryArrayList, setConutryArrayList] = useState([]);
    const [userName, setUserName] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if (!user) {
                localStorage.removeItem('token')
                history.replace('/')
            } else {
                setUserName(user.name)
            }
        }
    }, [])

    useEffect(() => {
        getAllConutries().then((data) => {
            setConutryList(data);
        });
    }, [])

    const handleSearchByName = (counrtyName) => {
        setCoutry(null);
        getConutryByName(counrtyName).then((data) => {
            setCoutry(data);
        });
    }

    const handleSearchByArray = (counrtyNameList) => {
        setConutryArrayList([]);
        if (counrtyNameList !== '') {
            getCountryListByStringArray(counrtyNameList).then((data) => {
                    setConutryArrayList(data);
                });
        }
    }

    return (
        <div >
            <Header user={userName} />
            <br />
            <CountrySearch handleSearch={handleSearchByName} country={country} />
            <br />
            <AllCountries countryList={conutryList} />
            <br />
            <CountryListByArray handleSearch={handleSearchByArray} countryArrayList={conutryArrayList} />
        </div>
    )
}

export default Home;