import React, { useEffect, useState } from "react";
import RegistrationForm from '../../Components/RegistrationForm'

const Registration = () => {

    const handleFormSubmit = (value)=>{
        console.log(value);
    }

    return(
        <div>
            <RegistrationForm handleSubmit={handleFormSubmit}/>
        </div>
    )
}

export default Registration;