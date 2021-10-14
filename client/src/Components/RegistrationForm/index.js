import React, { useEffect, useState } from "react";

const RegistrationForm = ({handleSubmit}) => {
    const [registration, setRegistration] = useState({
        name: '',
        email: '',
        password: '',
        isError: {
            name: '',
            email: '',
            password: ''
        }
    })

    const regExp = RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    )

    const formValid = ( isError) => {
        let isValid = true;
        Object.values(isError).forEach((val) => {
            if (val.length !== 0) {
                isValid = false;
            }
        });

        return isValid;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (formValid(registration.isError) && registration.name!=='' && registration.email!=='' && registration.password !=='') {
            handleSubmit(registration);
        } else {
            console.log("Form is invalid!")
        }
    }

    const formValChange = (e) => {
        e.preventDefault();

        const userInfo = {
            name: '',
            email: '',
            password: '',
            isError: {
                name: '',
                email: '',
                password: ''
            }
        }

        Object.keys(registration).map((x) => {
            userInfo[x] = registration[x];
        })

        const { name, value } = e.target;
        let isError = registration.isError;

        switch (name) {
            case "name":
                isError.name = value.length < 4 ? "Atleast 4 characaters required!" : ""
                break;
            case "email":
                isError.email = regExp.test(value) ? "" : "Email address is invalid!"
                break;
            case "password":
                isError.password = value.length < 6 ? "Atleast 6 characaters required!" : ""
                break;
            default:
                break;
        }

        userInfo[isError] = isError
        userInfo[name] = value

        setRegistration(userInfo)
    }

    return (
        <div className="form-container">
             <div className="jumbotron">
                <h3>Registration Form</h3>
            </div>
            <form onSubmit={onSubmit} noValidate>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className={registration.isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="name"
                        onChange={formValChange}
                    />
                    {registration.isError.name.length > 0 &&
                        <span className="invalid-feedback">{registration.isError.name}</span>}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className={registration.isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="email"
                        onChange={formValChange}
                    />
                    {registration.isError.email.length > 0 &&
                        <span className="invalid-feedback">{registration.isError.email}</span>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className={registration.isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                        name="password"
                        onChange={formValChange}
                    />
                    {registration.isError.password.length > 0 &&
                        <span className="invalid-feedback">{registration.isError.password}</span>}
                </div>
                <br/>
                <button type="submit" className="btn btn-block btn-danger">Create User</button>
            </form>
        </div>
    )
}

export default RegistrationForm;