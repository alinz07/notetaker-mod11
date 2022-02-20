const router = require('express').Router();
const path = require('path');
const fs = require('fs');
//const { filterByQuery, findById, createNewAnimal, validateAnimals} = require('../../../public/assets/js/index.js');
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    //read the db.json file and return all saved notes as json
    res.json(notes);
});

router.post('/notes', (req, res) => {
    //receive a new note to post on the request body
    const newNote = req.body
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '/../../db/db.json'),
        JSON.stringify(notes, null, 2)
    )

    res.json(req.body);
})

module.exports = router;