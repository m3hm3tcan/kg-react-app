const express = require('express');
const router = express.Router();

router.get('/getTestMessage', (req, res, next) => {
    res.json({ message: "Hello from serverdddd!" });
});

/*
this is for future implementation - userForm
router.post('/user', (req, res, next) => {
  // post placeholder
});
*/
module.exports = router;