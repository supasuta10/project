const express = require('express');
const router = express.Router();
const Booking = require('../models/booking.model'); // ต้องสร้าง booking.model.js ด้วย

// 📌 GET: ดึงรายการการจองทั้งหมด
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📌 POST: สร้างการจองใหม่
router.post('/', async (req, res) => {
  const { bookingDate, selectedMenus } = req.body;

  if (!bookingDate) {
    return res.status(400).json({ message: 'ต้องระบุวันที่จอง' });
  }

  const newBooking = new Booking({
    bookingDate,
    selectedMenus: selectedMenus || [],
  });

  try {
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 📌 GET: ดึงข้อมูลการจองตาม ID
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'ไม่พบการจอง' });

    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📌 DELETE: ลบการจอง
router.delete('/:id', async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'ไม่พบการจอง' });

    res.json({ message: 'ลบการจองเรียบร้อยแล้ว' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;