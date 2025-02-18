import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Layout from '../Template/Layout';
import { useNavigate } from 'react-router-dom';

const CalendarPicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate();
  
    const handleConfirm = () => {
      if (selectedDate) {
        navigate("/food");
      } else {
        alert("กรุณาเลือกวันที่ก่อนยืนยัน");
      }
    };
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
          <h2 className="text-xl font-semibold mb-4">เลือกวันที่</h2>
          <DatePicker 
            selected={selectedDate} 
            onChange={(date) => setSelectedDate(date)} 
            dateFormat="dd/MM/yyyy" 
            className="border p-2 rounded w-full text-center" 
          />
          <div className="flex gap-2 mt-4">
            <button 
              className="flex-1 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={handleConfirm}
            >
              ยืนยันวันที่
            </button>
            <button 
              className="flex-1 p-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
              onClick={() => setSelectedDate(null)}
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
  );
};

export default CalendarPicker;