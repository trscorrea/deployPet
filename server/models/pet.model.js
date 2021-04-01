const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name must be at least 3 characters"],
		length: [3, "Name must be at least 3 characters!"]
	},
	type: {
		type: String,
		required: [true, "Type must be at least 3 characters"],
		length: [3, "Type must be at least 3 characters!"]
	},
    description: {
		type: String,
		required: [true, "Description must be at least 3 characters"],
		length: [3, "Description must be at least 3 characters!"]
	},
	skillone: {
		type: String,
	},
	skilltwo: {
		type: String,
	},
	skillthree: {
		type: String,
	}
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
