import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import "./Home.css";
import CountrySearch from '../../Components/CountrySearch'
import AllCountries from '../../Components/AllCountries'
import CountryListByArray from '../../Components/CountryListByArray'
import Header from '../../Components/Header'
import { getAllConutries, getConutryByName, getCountryListByStringArray, isAlreadyLogged } from '../../Services/DataServices'

const Home = () => {
    const history = useHistory()

    const [country, setCoutry] = useState(null);
    const [conutryList, setConutryList] = useState([]);
    const [conutryArrayList, setConutryArrayList] = useState([]);
    const [userName, setUserName] = useState('')
    const [isError, setIsError] = useState(false)
    useEffect(() => {

        const user = isAlreadyLogged()
        if (user) {
            setUserName(user.name)
        } else {
            localStorage.removeItem('token')
            history.replace('/')
        }
    }, [])

    useEffect(() => {
        getAllConutries().then((data) => {
            setConutryList(data);
        }).catch((err) => {
            setIsError(true)
        });;
    }, [])

    const handleSearchByName = (counrtyName) => {
        setCoutry(null);
        getConutryByName(counrtyName).then((data) => {
            setCoutry(data);
        }).catch((err) => {
            setIsError(true)
        });
    }

    const handleSearchByArray = (counrtyNameList) => {
        setConutryArrayList([]);
        if (counrtyNameList !== '') {
            getCountryListByStringArray(counrtyNameList).then((data) => {
                setConutryArrayList(data);
            }).catch((err) => {
                setIsError(true)
            });
        }
    }

    return (
        <div >
            {isError &&
                <div className={`alert alert-danger alert-dismissible test fade ${!isError ? "" : "  show"} `} role="alert">
                    <strong>Hey!</strong> There is an error!
                    <button type="button" className="btn close" onClick={() => setIsError(false)} data-dismiss="danger" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            }

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