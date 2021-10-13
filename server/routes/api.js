const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/getTestMessage', (req, res, next) => {
  res.json({ message: "Hello from serverdddd!" });
});

router.get("/getAllCountry", async (req, res) => {
  try {
    const response = await axios({
      url: `${process.env.API_URL}/all?fields=name`,
      method: "get",
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/getCountryByName", async (req, res) => {
  const { query } = req;
  if (query.conutryName === null || query.conutryName === undefined) return res.status(400).json({ message: 'Bad request, Country name is missing!' });
  try {
    const response = await axios({
      url: `${process.env.API_URL}/name/${query.conutryName}?fullText=true&fields=name`,
      method: "get",
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/getListOfCountry", async (req, res) => {
  const { body } = req;
  let promises = [];
  for (let i = 0; i < body.conutryNames.length; i++) {
    promises.push(axios.get(`${process.env.API_URL}/name/${body.conutryNames[i]}?fields=name`));
  }

  const response = await axios.all(promises).then(result => {
    let conutryList = [];
    result.forEach(arrayItem => {
      arrayItem.data.forEach(conutry => {
        conutryList.push(conutry.name);
      })
    });
    res.status(200).json(conutryList)
  });

});

module.exports = router;