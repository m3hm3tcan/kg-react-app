import React from "react";
import RegistrationForm from '../../Components/RegistrationForm'
import { useHistory } from 'react-router-dom'

const Registration = () => {
    const history = useHistory();
    
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
                if(data.message === "User registered!")
                    history.push('/')
            });
    }

    return (
        <div>
            <RegistrationForm handleSubmit={handleFormSubmit} />
        </div>
    )
}

export default Registration;