import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Layout from '../Template/Layout';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // รับค่าจาก Date.jsx
  const { selectedMenu, bookingDate } = location.state || { selectedMenu: [], bookingDate: "" };

  const handleConfirmBooking = () => {
    if (!bookingDate) {
      Swal.fire({
        title: "แจ้งเตือน",
        text: "ไม่พบวันที่จอง กรุณาเลือกใหม่",
        icon: "warning",
        confirmButtonText: "ตกลง",
      });
      return;
    }

    Swal.fire({
      title: "ยืนยันการจอง?",
      text: `คุณต้องการจองงานวันที่ ${bookingDate} ใช่หรือไม่?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        const newBooking = { date: bookingDate, menu: selectedMenu };

        // บันทึกลง localStorage
        const existingBookings = JSON.parse(localStorage.getItem("bookingHistory")) || [];
        const updatedBookings = [...existingBookings, newBooking];
        localStorage.setItem("bookingHistory", JSON.stringify(updatedBookings));

        // ไปที่หน้า History.jsx
        navigate('/History', { state: { bookingHistory: updatedBookings } });
      }
    });
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4 text-blue-900">รายละเอียดการจองงาน</h1>

      <div className="mb-4">
        <label className="block text-lg font-semibold">วันที่จอง:</label>
        <p className="text-lg bg-gray-100 p-2 rounded-lg">{bookingDate || "ไม่ได้เลือกวันที่"}</p>
      </div>

      <h2 className="text-2xl font-semibold mt-6">เมนูที่เลือก:</h2>
      {selectedMenu.length > 0 ? (
        <ul className="mt-2 p-4 border rounded-lg bg-gray-100">
          {selectedMenu.map((item, index) => (
            <li key={index} className="text-lg">{item.name} - {item.menuPrice} บาท</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">ไม่มีเมนูที่เลือก</p>
      )}

      <button 
        onClick={handleConfirmBooking} 
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg"
      >
        ยืนยันการจอง
      </button>
    </Layout>
  );
};

export default Detail;