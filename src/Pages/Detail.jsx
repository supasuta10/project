import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../Template/Layout';
import Modal from 'react-modal';

// กำหนดค่าเริ่มต้นให้ Modal
Modal.setAppElement('#root'); 

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedMenu = location.state?.selectedMenu || [];

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false); // ป๊อปอัพยืนยัน
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // ป๊อปอัพจองสำเร็จ

  // เปิดป๊อปอัพยืนยันการจอง
  const handleConfirm = () => {
    setIsConfirmModalOpen(true);
  };

  // เมื่อกด "ใช่, ยืนยัน"
  const confirmBooking = () => {
    setIsConfirmModalOpen(false); // ปิดป๊อปอัพยืนยัน
    setIsSuccessModalOpen(true); // เปิดป๊อปอัพจองสำเร็จ
  };

  // เมื่อกด "ขอบคุณ" ให้ไปที่หน้า History.jsx
  const goToHistory = () => {
    setIsSuccessModalOpen(false);
    navigate("/history");
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4 text-green-900">ยืนยันการจองงาน</h1>
      <p className="text-lg">📌 รายละเอียดการจอง</p>
      <ul className="mt-2 p-4 border rounded-lg bg-gray-100">
        {selectedMenu.map((item, index) => (
          <li key={index} className="text-lg">{item.name} - {item.menuPrice} บาท</li>
        ))}
      </ul>

      {/* ปุ่มเปิดป๊อปอัพยืนยัน */}
      <button 
        onClick={handleConfirm} 
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        ✅ ยืนยันการจอง
      </button>

      {/* ปุ่มยกเลิก */}
      <button 
        onClick={() => navigate('/')} 
        className="mt-4 ml-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        ❌ ยกเลิก
      </button>

      {/* 🔹 ป๊อปอัพที่ 1: ยืนยันการจอง */}
      <Modal
        isOpen={isConfirmModalOpen}
        onRequestClose={() => setIsConfirmModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-xl font-semibold mb-4">⚠️ ยืนยันการจอง</h2>
          <p className="mb-4">คุณต้องการจองงานนี้ใช่หรือไม่?</p>
          <div className="flex justify-center gap-4">
            <button 
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={confirmBooking}
            >
              ยืนยัน
            </button>
            <button 
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              onClick={() => setIsConfirmModalOpen(false)}
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </Modal>

      {/* 🔹 ป๊อปอัพที่ 2: จองสำเร็จ */}
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={goToHistory}
        className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
          <h2 className="text-xl font-semibold mb-4">🎉 จองสำเร็จ!</h2>
          <p className="mb-4">ระบบทำการจองงานให้คุณเรียบร้อยแล้ว</p>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={goToHistory}
          >
            🙏 ขอบคุณ
          </button>
        </div>
      </Modal>

    </Layout>
  );
};

export default Detail;