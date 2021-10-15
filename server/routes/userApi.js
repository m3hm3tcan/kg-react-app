const express = require('express');
const router = express.Router();
const axios = require("axios");
const User = require("../models/user.model")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res) => {
    try {
        const newPass = await bcrypt.hash(req.body.password, 10)

        // Local MONGO DB user creation...
        /* await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPass,
        })
        */

        const response = await axios
            .post(process.env.CLOUD_DB_URL, {
                name: req.body.name,
                email: req.body.email,
                password: newPass,
            }, {
                headers:
                {
                    'cache-control': 'no-cache',
                    'x-apikey': process.env.CLOUD_DB_KEY,
                    'content-type': 'application/json'
                },
            });

        res.json({ message: "User registered!" });
    } catch (err) {
        res.json({ message: "Dublicate User!" });
    }
});

router.post('/login', async (req, res) => {
    try {
        //local mongo db user search
        //const user = await User.findOne({ email: req.body.email })
        const user = await axios({
            url: `https://lividb-380f.restdb.io/rest/kg-test-table?q={"email":"mj@text.com"}`,
            method: "get",
            cache: 'no-cache',
            headers: {
                'Accept': 'application/json',
                'x-apikey': `${process.env.CLOUD_DB_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if(user.status !== 200){throw response}
        
        if(user.data.length > 0 ){
            const isValidPassword = await bcrypt.compare(req.body.password, user.data[0].password)

            if (user.data[0] && isValidPassword) {
                const token = jwt.sign({
                    email: user.data[0].email,
                    name: user.data[0].name
                }, process.env.SERCERT_KEY)
                res.json({ message: "Login Succesful!", user: token });
            } else {
                res.json({ message: "Error!", user: null });
            }
        }        
        res.json({ message: "User Not Found!", user: null });
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;