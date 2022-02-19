const router = require('express').Router();
//const { filterByQuery, findById, createNewAnimal, validateAnimals} = require('../../../public/assets/js/index.js');
const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    //read the db.json file and return all saved notes as json
    res.json(notes);
});

router.post('/notes', (req, res) => {
    //receive a new note to post on the request body

    //create a unique id for the note and look into npm packages that will do this

    //add it to the db.json file

    //return new note to the client
    console.log(req.body);
    res.json(req.body);
    
})

module.exports = router;