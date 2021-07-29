const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('You are accessing Main Route');
});

module.exports = (app) => {
    app.use('/main', router);
};