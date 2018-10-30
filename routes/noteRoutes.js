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

router.get('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const note = await notes.getById(id);

        if(note) {
            res.status(200).json(note)
        } else {
            res.status(404).json({MESSAGE: `NOTE NOT FOUND`})
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;