import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../Template/Layout';
import FoodMenuCard from './../Components/FoodMenuCard';

const menuItems = [
  { name: "ทะเลนึ่งซีฟู้ด", menuPrice: 2000, description: "ทะเล" },
  { name: "ยำสามกรอบ", menuPrice: 1800, description: "ยำ" },
  { name: "ข้าวผัดปู", menuPrice: 1800, description: "ข้าว" },
  { name: "ต้มยำทะเล", menuPrice: 2000, description: "ต้มยำ" },
  { name: "ปลากระพงนึ่งมะนาว", menuPrice: 1800, description: "ปลา" },
  { name: "เต้าหู้นมสด", menuPrice: 1800, description: "ของหวาน" },
];

const SearchMenu = () => {
  const [price, setPrice] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingDate } = location.state || { bookingDate: '' }; // รับวันที่จอง

  // กรองเมนูตามราคา
  const filteredMenu = menuItems.filter(
    (item) => price === '' || item.menuPrice === Number(price)
  );

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4 text-green-900">ค้นหาเมนูอาหารตามราคา</h1>

      {/* แสดงวันที่จอง */}
      <h2 className="text-xl mb-2">📅 วันที่จอง: {bookingDate || 'ยังไม่ได้เลือกวันที่'}</h2>

      {/* ช่องกรอกตัวเลขสำหรับค้นหาราคา */}
      <div className="flex gap-2">
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="ใส่ราคาอาหาร..."
          className="w-full p-2 border rounded-lg"
        />
        <button
          onClick={() => setPrice('')}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
        >
          ล้างค่า
        </button>
      </div>

      <div className="mt-4">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item, index) => (
            <FoodMenuCard
              key={index}
              name={item.name}
              menuPrice={item.menuPrice}
              description={item.description}
            />
          ))
        ) : (
          <p className="text-red-500 mt-4">ไม่พบเมนูที่ตรงกับราคา</p>
        )}
      </div>

      {/* ปุ่มเลือกเมนู */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => navigate('/FoodMenu', { state: { bookingDate } })}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        >
          ย้อนกลับ
        </button>
        <button
          onClick={() => navigate('/MenuSelection', { state: { bookingDate } })}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          เลือกเมนู
        </button>
      </div>
    </Layout>
  );
};

export default SearchMenu;