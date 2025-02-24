import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Template/Layout';

const Home = () => {
  const navigate = useNavigate(); // ใช้สำหรับเปลี่ยนหน้า

  return (
    <Layout>
      <main className="p-6 max-w-4xl mx-auto">
        {/* Section: รายละเอียดโต๊ะจีน */}
        <section className="text-center">
          <h2 className="text-green-700 text-3xl font-bold mb-4">
            โต๊ะจีนชัยเจริญโภชนา (เอ๋) นครปฐม
          </h2>
          <p className="text-gray-700 text-lg">
            ยินดีต้อนรับเข้าสู่ระบบของชัยเจริญ
          </p>
          <p className="mt-2 text-gray-600">
            ทีมงานเรารับจัดโต๊ะจีนนอกสถานที่ งานเล็ก งานใหญ่ ทีมงานเราเต็มใจให้บริการ
          </p>
          
          {/* ปุ่มจองเลย */}
          <button 
            onClick={() => navigate("/Date")}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
          >
            จองเลย
          </button>
        </section>

        {/* Section: รูปภาพแสดงบริการ */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <img 
            src="" 
            alt="นามบัตรหน้า 1"
            className="rounded-lg shadow-md object-cover w-full h-60"
            onError={(e) => (e.target.src = "/img/nb1.jpg")} // แสดงภาพเริ่มต้นหากโหลดไม่ได้
          />
          <img 
            src="" 
            alt="นามบัตรหน้า 2"
            className="rounded-lg shadow-md object-cover w-full h-60"
            onError={(e) => (e.target.src = "/img/nb2.jpg")}
          />
        </section>
      </main>
    </Layout>
  );
}

export default Home;