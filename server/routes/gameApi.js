const express = require('express');
const router = express.Router();
const axios = require("axios");
const utility = require('../utilities/utility');

router.get('/playGame', async (req, res) => {
    try {
        const user = await axios({
            url: `https://lividb-380f.restdb.io/rest/kg-test-table?q={"email":"${req.body.email}"}`,
            method: "get",
            cache: 'no-cache',
            headers: {
                'Accept': 'application/json',
                'x-apikey': `${process.env.CLOUD_DB_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (user.status !== 200) { throw response }

        if (user.data.length > 0) {

            if (user.data[0].totalCoins > 0) {

                let currentPrize = user.data[0].totalCoins - utility.eachSpinCost;
                let prizeText = '';
                for (let i = 0; i < utility.totalReelTry; i++) {
                    let nextNumber = utility.getRandomNumber();
                    let peekFruit = utility.reels[i][nextNumber];
                    if (i !== 0) {
                        prizeText += '-';
                    }
                    prizeText += peekFruit;
                }
                let wonPrize = utility.getUserPrize(prizeText)
                currentPrize = currentPrize + wonPrize;


                const response = await axios
                    .patch(`${process.env.CLOUD_DB_URL}/${user.data[0]._id}`, {
                        totalCoins: currentPrize,
                    }, {
                        headers:
                        {
                            'cache-control': 'no-cache',
                            'x-apikey': process.env.CLOUD_DB_KEY,
                            'content-type': 'application/json'
                        },
                    });

                res.json({
                    currentPrize: currentPrize,
                    prizeText: prizeText
                });
            } else {
                res.json({ message: "User has no enough coins!", user: null });
            }
        }
        res.json({ message: "User not found!", user: null });
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;
