const router = require('express').Router();
const db = require("../models"); //brings in models

router.get('/seed', (req,res,err) => {
    const seeds = require('../charSeeds.json');

    // could do for each. map also ran this for each of the characters in from the seeder
    // the below makes an array of promises
    Promise.all(
      seeds.map(character => db.Character.create(character))
    )
    .then(characters => res.json(characters));
})

module.exports = router;