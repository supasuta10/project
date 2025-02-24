import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-modal"; // นำเข้า Modal
import Layout from '../Template/Layout';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// รายการวันที่ถูกจองแล้ว
const bookedDates = [
    new Date(2025, 1, 25), // 25 ก.พ. 2025
    new Date(2025, 1, 28), // 28 ก.พ. 2025
];

const CalendarPicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State สำหรับเปิด/ปิดป๊อปอัพ
    const navigate = useNavigate();

    // ฟังก์ชันกำหนดสีพื้นหลังให้วันที่ถูกจอง
    const highlightBookedDates = (date) => {
        return bookedDates.some((booked) => booked.toDateString() === date.toDateString())
            ? "bg-red-500 text-white rounded-full"  // สีแดงทึบสำหรับวันที่จองแล้ว
            : "";
    };

    const handleConfirm = () => {
        if (!selectedDate) {
            toast.warning("กรุณาเลือกวันที่ก่อนยืนยัน", { position: "top-center" });
            return;
        }

        // เช็คว่าวันที่ถูกจองแล้วหรือไม่
        const isBooked = bookedDates.some(
            (date) => date.toDateString() === selectedDate.toDateString()
        );

        if (isBooked) {
            toast.error("ขออภัย วันนี้คิวเต็มแล้ว", { position: "top-center" });
        } else {
            setIsModalOpen(true); // เปิดป๊อปอัพ
        }
    };

    const confirmBooking = () => {
        toast.success("จองสำเร็จ! กำลังนำคุณไปที่หน้าเมนู...", { position: "top-center" });
        setIsModalOpen(false);
        setTimeout(() => navigate("/food"), 2000); // รอ 2 วิ ก่อนเปลี่ยนหน้า
    };

    return (
        <Layout>
            <div className="flex flex-col items-center min-h-screen p-6">
                <h1 className="text-2xl font-semibold mb-6 text-green-700">เลือกวันที่ต้องการจองงาน</h1>

                {/* แสดงปฏิทินและการเลือกวันที่ */}
                <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
                    
                    {/* ปฏิทินภาพรวม */}
                    <div className="md:w-1/2">
                        <h3 className="text-lg font-bold text-gray-700 mb-3">📅 ปฏิทินภาพรวม</h3>
                        <DatePicker
                            inline
                            renderDayContents={(day, date) => (
                                <div className={`p-2 ${highlightBookedDates(date)}`}>{day}</div>
                            )}
                        />
                    </div>

                    {/* ฟอร์มเลือกวันที่ */}
                    <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
                        <h3 className="text-lg font-semibold mb-3 text-gray-700">📌 เลือกวันที่ต้องการ</h3>
                        <DatePicker 
                            selected={selectedDate} 
                            onChange={(date) => setSelectedDate(date)} 
                            dateFormat="dd/MM/yyyy" 
                            className="border p-2 rounded w-full text-center"
                            placeholderText="เลือกวันที่"
                            showPopperArrow={false}
                            excludeDates={bookedDates} // ไม่ให้เลือกวันที่ถูกจองแล้ว
                            minDate={new Date()} // ไม่ให้เลือกวันย้อนหลัง
                        />
                        <p className="text-sm text-gray-500 mt-2">* วันที่มีวงกลมสีแดง มีงานเต็มแล้ว ไม่สามารถจองได้</p>

                        {/* ปุ่มควบคุม */}
                        <div className="flex gap-3 mt-6">
                            <button 
                                className="flex-1 p-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
                                onClick={handleConfirm}
                            >
                                ✅ ยืนยันวันที่
                            </button>
                            <button 
                                className="flex-1 p-3 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                                onClick={() => setSelectedDate(null)}
                            >
                                ❌ ยกเลิก
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ป๊อปอัพยืนยันการจอง */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
            >
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                    <h2 className="text-xl font-semibold mb-4">ยืนยันการจอง</h2>
                    <p className="mb-4">คุณต้องการจองงาน วันที่ <strong>{selectedDate?.toLocaleDateString("th-TH")}</strong> ใช่หรือไม่?</p>
                    <div className="flex justify-center gap-4">
                        <button 
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            onClick={confirmBooking}
                        >
                            ยืนยัน
                        </button>
                        <button 
                            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ยกเลิก
                        </button>
                    </div>
                </div>
            </Modal>

        </Layout>
    );
};

export default CalendarPicker;