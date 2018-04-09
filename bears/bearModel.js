const mongoose = require('mongoose');

const bearSchema = new mongoose.Schema({
    species: String,
    latinName: String,
    createdOn: Date,
});

const bearModel = mongoose.model('Bear', bearSchema); // bears collection

module.exports = bearModel;