const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('You are accessing Sub Route');
})

module.exports = (app) => {
    app.use('/sub', router);
}