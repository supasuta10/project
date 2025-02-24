import React from 'react';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import Layout from '../Template/Layout';
import FoodMenuCard from './../Components/FoodMenuCard';

const FoodMenu = () => {
  const navigate = useNavigate(); // สร้างฟังก์ชันสำหรับเปลี่ยนหน้า

  return (
    <Layout>
      <h1 className="text-5xl font-bold mb-6 text-green-900">รายการอาหารแนะนำ</h1>
      <hr />
      
      {/* ปุ่มสำหรับไปที่หน้าค้นหาเมนู */}
      <div className="flex justify-between mt-4">
        <button 
          onClick={() => navigate('/search-menu')} // คลิกแล้วไปที่หน้าค้นหา
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          ค้นหาเมนูอาหาร
        </button>
        <button 
          onClick={() => navigate('/MenuSelection')} // คลิกแล้วไปที่หน้าเลือกเมนู
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition transform hover:scale-105"
        >
          เลือกเมนู
        </button>
      </div>

      <div className="mt-4">
        <FoodMenuCard name="ทะเลนึ่งซีฟู้ด" menuPrice={2000} description="ทะเล" />
        <FoodMenuCard name="ยำสามกรอบ" menuPrice={1800} description="ยำ" />
        <FoodMenuCard name="ข้าวผัดปู" menuPrice={1800} description="ข้าว" />
        <FoodMenuCard name="ต้มยำทะเล" menuPrice={2000} description="ต้มยำ" />
        <FoodMenuCard name="ปลากระพงนึ่งมะนาว" menuPrice={1800} description="ปลา" />
        <FoodMenuCard name="เต้าหู้นมสด" menuPrice={1800} description="ของหวาน" />
      </div>
    </Layout>
  );
}

export default FoodMenu;