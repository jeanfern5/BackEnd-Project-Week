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
    const {id} = req.params;
    const note = await notes.getById(id);

    try{
        if(note) {
            res.status(200).json(note)
        } else {
            res.status(404).json({MESSAGE: `NOTE NOT FOUND`})
        }
    }

    catch(err) {res.status(500).json(err)}
});

router.post('/', async (req, res) => {
    const {title, content} = await req.body;

    try {
        if (!title.substr(1, 200)) {
            res.status(411).json({REQUIRED: `PLEASE INCLUDE A TITLE LESS THAN 200 CHARACTERS`});
        } else if (!content) {
            res.status(411).json({REQUIRED: `PLEASE INCLUDE CONTENT`})
        }else {
            notes 
                .insert({title, content})
                .then(newNote => {
                    res.status(201).json(newNote);
                })
        }
    }

    catch(err){res.status(500).json(err)}
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {title, content} = await req.body;

    try {
        if (!title.substr(1, 200)) {
            res.status(411).json({REQUIRED: `PLEASE INCLUDE A TITLE LESS THAN 200 CHARACTERS`});
        } else if (!content) {
            res.status(411).json({REQUIRED: `PLEASE INCLUDE CONTENT`})
        }else {
            notes
                .update(id, {title, content})
                .then(isUpdated => {
                    if (!isUpdated){
                        res.status(400).json({ERROR: `NOTE WAS NOT ABLE TO UPDATE`});
                    } else {
                        res.status(200).json(isUpdated);
                    }
                })
        }
    }

    catch(err) {res.status(500).json(err)}
});

router.delete('/:id', async (req, res) => {
    const {id} = await req.params;

    try {
        notes
        .remove(id)
        .then(isRemoved => {
            if (!isRemoved) {
                res.status(400).json({ERROR: `NOTE WAS NOT ABLE TO BE REMOVED`});
            } else {
                res.status(200).json(isRemoved);
            }
        })
    }

    catch(err){res.status(500).json(err)}
});

module.exports = router;