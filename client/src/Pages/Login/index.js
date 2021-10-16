import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { userLogin } from '../../Services/DataServices'
import { isAlreadyLogged } from "../../Services/DataServices";

const Login = () => {
    const history = useHistory();
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: ''
    })
    const [isSuccess, setIsSuccess] = useState(true)

    useEffect(() => {
        const user = isAlreadyLogged()
        if (user) {
            history.replace('/home')
        } else {
            localStorage.removeItem('token')
            history.replace('/')
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        userLogin(loginUser)
            .then((data) => {
                if (data.user) {
                    setIsSuccess(true)
                    localStorage.setItem('token', data.user)
                    history.push('/home')
                } else {
                    setIsSuccess(false);
                }
            }).catch((err) => {
                setIsSuccess(false);
            });
    }

    const formValChange = (e) => {
        e.preventDefault();

        const userInfo = {
            email: '',
            password: ''
        }

        Object.keys(loginUser).map((x) => {
            userInfo[x] = loginUser[x];
        })

        const { name, value } = e.target;
        userInfo[name] = value
        setLoginUser(userInfo);
    }

    return (
        <div className="form-container">
            <div className="jumbotron">
                <h3>Login Form</h3>
            </div>
            <form onSubmit={onSubmit} noValidate>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={formValChange}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={formValChange}
                    />
                </div>
                {!isSuccess && <div class="alert alert-danger" role="alert">
                    Login faild!
                </div>}
                <br />
                <button type="submit" className="btn  btn-primary">Login</button>
                <span className=" sign-up-btn" > If you don't have an account please <a href='/sign-up'>sign up</a></span>
            </form>
        </div>
    )
}

export default Login;