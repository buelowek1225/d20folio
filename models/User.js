const mongoose = require("mongoose");
// pull this from: 18-mongoose/19-Populate-Exercise
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `name` must be unique and of type String
  Username: {
    type: String,
    unique: true
  },
  password: {
      type: String,
  },
  characters:  [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "Character"
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;