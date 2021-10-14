import React, { useEffect, useState } from "react";
import RegistrationForm from '../../Components/RegistrationForm'

const Registration = () => {

    const handleFormSubmit = (userInfo) => {
        fetch(`/userapi/register`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(
                {
                    name: userInfo.name,
                    email: userInfo.email,
                    password: userInfo.password
                }
            )
        })
            .then((res) => res.json())
            .then((data) => {
                console.log( data);
            });
    }

    return (
        <div>
            <RegistrationForm handleSubmit={handleFormSubmit} />
        </div>
    )
}

export default Registration;