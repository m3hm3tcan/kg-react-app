const express = require('express');
const router = express.Router();
const axios = require("axios");
const User = require("../models/user.model")
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ message: "User registered!" });
    } catch (err) {
        res.json({ message: "Dublicate User!" });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password })
        if (user) {
            const token = jwt.sign({
                email: user.email,
                name: user.name
            }, process.env.SERCERT_KEY)
            res.json({ message: "Login Succesful!", user: token });
        } else {
            res.json({ message: "Error!", user: null });
        }
    } catch (err) {
        res.json({ message: "error" });
    }
});

module.exports = router;