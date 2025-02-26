import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Layout from "../Template/Layout";

const bookedDates = ["2025-02-28", "2025-03-05", "2025-03-10"]; // จำลองวันที่จองแล้ว

const DateSelection = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");

  const handleConfirmDate = () => {
    if (!selectedDate) {
      alert("กรุณาเลือกวันที่ก่อน");
      return;
    }
    
    if (bookedDates.includes(selectedDate)) {
        alert("วันที่ที่เลือกถูกจองแล้ว กรุณาเลือกวันอื่น");
        return;
    }
    navigate("/FoodMenu", { state: { bookingDate: selectedDate } });

  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = date.toISOString().split("T")[0];
      if (bookedDates.includes(formattedDate)) {
        return "booked-date";
      }
    }
    return "";
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4 text-blue-900">เลือกวันที่จอง</h1>
      <div className="flex gap-8">
        {/* ปฏิทินด้านซ้าย */}
        <div>
          <Calendar
            onChange={(date) => setSelectedDate(date.toISOString().split("T")[0])}
            tileClassName={tileClassName}
            minDate={new Date()} // ✅ ป้องกันการเลือกวันย้อนหลัง
          />
        </div>

        {/* ช่องเลือกวันที่ */}
        <div className="flex flex-col">
          <label className="text-xl font-semibold">เลือกวันที่:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="mt-2 p-2 border rounded-lg cursor-pointer"
            min={new Date().toISOString().split("T")[0]} // ✅ ป้องกันการเลือกวันย้อนหลัง
          />
          <button
            onClick={handleConfirmDate}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg"
          >
            ยืนยันวันที่
          </button>
        </div>
      </div>

      <style>
        {`
          .booked-date {
            background: red !important;
            color: white !important;
            border-radius: 50%;
          }
        `}
      </style>
    </Layout>
  );
};

export default DateSelection;