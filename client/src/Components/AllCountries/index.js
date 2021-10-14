import React, { useEffect, useState } from "react";
import "./AllCountries.css";

const AllCountries = ({ countryList }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredList, setFilteredList] = useState(countryList);
    const [isOpen, setIsOpen]= useState(false);
    const handleChange = (event) => {
        
        setSearchText(event.target.value)
        let result = countryList.filter(item=> item.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredList(result);
        event.target.value !== '' ? setIsOpen(true) : setIsOpen(false) 
    }

    return (
     
        <div className="container">
            <div className="jumbotron">
                <h3>All Countries</h3>
                <p>Search from list of countries.</p>
            </div>

            <div className="row">
                <div class="col-sm-3">
                    <input type="text" className="form-control" id="coutry" value={searchText} onChange={handleChange} placeholder="Filter here" />
                </div>
                <div className="col-sm-3">
                <div className={`dropdown ${isOpen ? "show" : ""}`}>
                        <a className="btn btn-secondary dropdown-toggle" onClick={()=>setIsOpen(!isOpen)} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Country List
                        </a>

                        <div className={`dropdown-menu ${isOpen ? "show" : ""}`} aria-labelledby="dropdownMenuLink">
                            {filteredList.map(country=>(
                                <a className="dropdown-item" href="#">{country.name}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AllCountries;