const router = require('express').Router();
const db = require("../models"); //brings in models
const seeds = require('../charSeeds.json')

router.route('/characters')
    .get( (req,res,err) => {
    // get all characters here
    // res.json(seeds);
    db.Character.find({})
        .sort({_id: -1}) //New stuff is on top
        .then(characters => {console.log("Got Characters: ", characters); return characters;})
        // whatever the characters comes back above will then be used in the next .then function
        .then(characters => res.json(characters))
        .catch(error => res.json(500, error))
})

router.route('/character')
    .post( (req,res,err) => {
    // make a new character here
    // res.json("");
    // axios is in the body of our request
    const newChar = req.body;

    db.Character.create(newChar)
        .then(character => res.json(character))
        .catch(error => res.json(500, error))
})

router.route('/character/:id')
    .get( (req,res,err) => {
    // get a single character
    res.json(seeds[0]);
    })
    .put( (req,res,err) => {
    // update a single characer
    res.json("");
    })
    .delete( (req,res,err) => {
    // delete a character here
    res.json("");
    })

router.route('/characters/mine')
    .get( (req,res,err) => {
    // get all my characters here
    res.json(seeds);
})


module.exports = router;