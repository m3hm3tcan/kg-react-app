import React, { useEffect, useState } from "react";

const Login = () => {
    const [loginUser,setLoginUser]=useState({
        email: '',
        password: ''
    })

    const onSubmit =(e)=>{
        e.preventDefault();
        fetch(`/userapi/login`,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({email: loginUser.email, password: loginUser.password})
        })
            .then((res) => res.json())
            .then((data) => {
               console.log('user data',data);
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

    return(
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
           <br/>
           <button type="submit" className="btn btn-block btn-primary">Login</button>
       </form>
   </div>
    )
}

export default Login;