const Pet = require("../models/pet.model");

module.exports.findAllPets = (req, res) => {
    Pet.find().sort("type").exec()
        .then(allPets => res.json({ pets: allPets }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOnePet = (req, res) => {
	Pet.findOne({ _id: req.params.id })
		.then(onePet => res.json({ pets: onePet }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
        .catch(err => res.json(err));
};

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true , runValidators: true})
        .then(updatedPet => res.json({ pet: updatedPet }))
        .catch(err => res.json(err));
};

module.exports.deleteAnExistingPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
