const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    name: String,
    imageUrl: String,

    race: {
        type: String,
        enum: ['Elf', 'Dwarf', 'Human']
    },
    class: {
        type: String,
        enum: ['Warrior', 'Mystic', 'Rogue']
    },
    level: {
        type: Number,
        defautl: 1
    },
    STR: Number,
    DEX: Number,
    CON: Number,
    INT: Number,
    WIS: Number,
    CHA: Number,

  });

  equipment: [
      {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "Equipment"
      }
  ]
    

  const Character = mongoose.model("Character", CharacterSchema);

//   Export the User model
module.exports = Character;