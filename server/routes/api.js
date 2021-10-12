const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/getTestMessage', (req, res, next) => {
  res.json({ message: "Hello from serverdddd!" });
});

router.get("/getCityByName", async (req, res) => {
  const { query } = req;
  if(query.conutryName === null || query.conutryName === undefined) return res.status(400).json({ message: 'Bad request, Country name is missing!' });
  try {
    const response = await axios({
      url: `${process.env.API_URL}/name/${query.conutryName}?fullText=true`,
      method: "get",
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

/*
this is for future implementation - userForm
router.post('/user', (req, res, next) => {
  // post placeholder
});
*/
module.exports = router;