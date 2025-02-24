import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  
  // กรองเมนูที่มีราคาตรงกับค่าที่ป้อน
  const filteredMenu = menuItems.filter(item => 
    price === "" || item.menuPrice === Number(price)
  );

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4 text-green-900">ค้นหาเมนูอาหารตามราคา</h1>
      
      {/* ช่องกรอกตัวเลขสำหรับค้นหาราคา */}
      <input 
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="ใส่ราคาอาหาร..."
        className="w-full p-2 border rounded-lg"
      />

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
          onClick={() => navigate('/FoodMenu')} 
          className="px-4 py-2 bg-gray-500 text-white rounded-lg"
        >
          ย้อนกลับ
        </button>
        <button 
          onClick={() => navigate('/MenuSelection')} 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          เลือกเมนู
        </button>
      </div>
    </Layout>
  );
}

export default SearchMenu;