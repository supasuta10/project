const express = require('express');
const router = express.Router();
const FoodMenu = require('../models/foodmenu.model'); // ต้องสร้าง foodmenu.model.js ด้วย

// 📌 GET: ดึงรายการอาหารทั้งหมด
router.get('/', async (req, res) => {
  try {
    const foodMenus = await FoodMenu.find();
    res.json(foodMenus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📌 POST: เพิ่มเมนูอาหารใหม่
router.post('/', async (req, res) => {
  const { name, menuPrice, description } = req.body;

  if (!name || !menuPrice) {
    return res.status(400).json({ message: 'ต้องระบุชื่อเมนูและราคา' });
  }

  const newFoodMenu = new FoodMenu({
    name,
    menuPrice,
    description
  });

  try {
    const savedFoodMenu = await newFoodMenu.save();
    res.status(201).json(savedFoodMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 📌 GET: ดึงข้อมูลเมนูอาหารตาม ID
router.get('/:id', async (req, res) => {
  try {
    const foodMenu = await FoodMenu.findById(req.params.id);
    if (!foodMenu) return res.status(404).json({ message: 'ไม่พบเมนูอาหาร' });

    res.json(foodMenu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📌 DELETE: ลบเมนูอาหาร
router.delete('/:id', async (req, res) => {
  try {
    const foodMenu = await FoodMenu.findByIdAndDelete(req.params.id);
    if (!foodMenu) return res.status(404).json({ message: 'ไม่พบเมนูอาหาร' });

    res.json({ message: 'ลบเมนูอาหารเรียบร้อยแล้ว' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;