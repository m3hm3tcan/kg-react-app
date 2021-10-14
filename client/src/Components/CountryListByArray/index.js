import React, { useEffect, useState } from "react";

const CountryListByArray = ({ handleSearch, countryArrayList }) => {
    const [conutryList, setConutryList] = useState('');
    const [searchText, setSearchText] = useState('');

    const handleChange = (event) => {
        setSearchText(event.target.value)
    }

    const handleAdd = () => {
        let temp = conutryList;
        if (temp === '' && searchText !== '') {
            setConutryList(searchText);
        }

        if (temp !== '' && searchText !== '') {
            setConutryList(`${conutryList},${searchText}`);
        }
        setSearchText('')
    }

    const handleSearchByList = () => {
        handleSearch(conutryList);
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <h3>Country Seacrh by String Array</h3>
            </div>
            <div className="form-group">
                <input type="text" className=" search-box" value={searchText} onChange={handleChange} placeholder="Add string here" />
                <button type="button" className="btn btn-primary" onClick={handleAdd}>Add in List</button>
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={handleSearchByList}>Search</button>
            </div>

            {countryArrayList.lenght !== 0
                &&
                countryArrayList.map((item, index) => (
                    <p>{`${index+1} - ${item}`}</p>
                ))
            }

        </div>
    )
}

export default CountryListByArray;