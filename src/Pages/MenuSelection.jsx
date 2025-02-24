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

const SelectMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const navigate = useNavigate();

  const toggleSelection = (menuItem) => {
    setSelectedMenu((prevSelected) => {
      if (prevSelected.includes(menuItem)) {
        const newSelection = prevSelected.filter(item => item !== menuItem);
        if (newSelection.length === 0) {
          setSelectedPrice(null); // รีเซ็ตราคาเมื่อไม่มีเมนูที่เลือก
        }
        return newSelection;
      } else {
        if (selectedPrice === null || selectedPrice === menuItem.menuPrice) {
          setSelectedPrice(menuItem.menuPrice);
          return [...prevSelected, menuItem];
        } else {
          alert("กรุณาเลือกเมนูที่มีราคาเดียวกันเท่านั้น");
          return prevSelected;
        }
      }
    });
  };

  const confirmSelection = () => {
    navigate('/Detail', { state: { selectedMenu } });
  };

  const cancelSelection = () => {
    setSelectedMenu([]);
    setSelectedPrice(null);
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4 text-green-900">เลือกเมนูอาหาร</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <div key={index} className="relative">
            <FoodMenuCard 
              name={item.name} 
              menuPrice={item.menuPrice} 
              description={item.description} 
            />
            <button 
              onClick={() => toggleSelection(item)}
              className={`absolute top-2 right-2 px-4 py-2 rounded-lg ${selectedMenu.includes(item) ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
            >
              {selectedMenu.includes(item) ? 'ยกเลิก' : 'เลือก'}
            </button>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-semibold mt-6">เมนูที่เลือก:</h2>
      {selectedMenu.length > 0 ? (
        <ul className="mt-2 p-4 border rounded-lg bg-gray-100">
          {selectedMenu.map((item, index) => (
            <li key={index} className="text-lg">{item.name} - {item.menuPrice} บาท</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">ยังไม่ได้เลือกเมนู</p>
      )}

      {/* ปุ่มยืนยันเมนู */}
      <button 
        onClick={confirmSelection} 
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
        disabled={selectedMenu.length === 0}
      >
        ยืนยันเมนูที่เลือก
      </button>

      {/* ปุ่มยกเลิกการเลือกเมนู */}
      <button 
        onClick={cancelSelection} 
        className="mt-4 ml-4 px-6 py-2 bg-gray-500 text-white rounded-lg"
      >
        ยกเลิกการเลือก
      </button>
    </Layout>
  );
};

export default SelectMenu;