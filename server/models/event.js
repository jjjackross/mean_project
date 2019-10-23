const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "An author must have a name"],
        minlength: [3, "An author's name must be at least 3 letters long."]
    },    
  }, { timestamps: true });

mongoose.model('Character', CharacterSchema);
