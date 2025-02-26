const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingDate: { type: Date, required: true },
  selectedMenus: [
    {
      foodMenuId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodMenu' },
      quantity: { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.model('Booking', bookingSchema);