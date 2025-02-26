import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[#235D3A] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-white text-2xl font-bold">
          ชัยเจริญโภชนา
        </a>
        <ul className="flex space-x-4">
          <li>
            <NavLink className="text-white hover:text-[#C8EAD1]" to="/">
              หน้าหลัก
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white hover:text-[#C8EAD1]" to="/date">
              ปฏิทิน
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white hover:text-[#C8EAD1]" to="/FoodMenu">
              รายการอาหาร
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white hover:text-[#C8EAD1]" to="/History">
              ประวัติจองงาน
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white hover:text-[#C8EAD1]" to="/contact">
              ติดต่อ
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;