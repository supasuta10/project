import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../Template/Layout';

const History = () => {
  const location = useLocation();
  const { bookingHistory } = location.state || { bookingHistory: [] };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4 text-green-900">ประวัติการจองงาน</h1>
      {bookingHistory.length > 0 ? (
        <div className="mt-4">
          {bookingHistory.map((booking, index) => (
            <div key={index} className="p-4 border rounded-lg mb-4 bg-gray-100">
              <h2 className="text-2xl font-semibold">วันที่: {booking.date}</h2>
              <h3 className="text-xl font-medium mt-2">รายการอาหาร:</h3>
              <ul className="list-disc list-inside mt-1">
                {booking.menu.map((item, i) => (
                  <li key={i} className="text-lg">{item.name} - {item.menuPrice} บาท</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">ไม่มีประวัติการจอง</p>
      )}
    </Layout>
  );
};

export default History;