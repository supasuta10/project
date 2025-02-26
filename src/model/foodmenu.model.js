const mongoose = require('mongoose');

const foodMenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  menuPrice: { type: Number, required: true },
  description: { type: String }
});

module.exports = mongoose.model('FoodMenu', foodMenuSchema);