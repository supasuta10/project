import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// เชื่อมต่อ MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/yourDatabaseName');
  // .then(() => console.log('✅ MongoDB connected'))
  // .catch(err => console.log('❌ MongoDB connection error:', err));

// Route ทดสอบ
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});