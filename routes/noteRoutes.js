const router = require('express').Router();

const notes = require('../data/helpers/noteDb.js');

router.get('/', (req, res) => {
    notes 
        .get()
        .then(allNotes => {
            res.status(200).json(allNotes);
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router;