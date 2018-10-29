const router = require('express').Router();

const notes = require('../data/helpers/noteDb.js');

router.get('/', (req, res) => {
    res.send('Are you working from routes/noteRoutes.js?'); //Yes
});

module.exports = router;