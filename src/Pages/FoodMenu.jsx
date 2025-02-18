import React from 'react'
import Layout from '../Template/Layout'
import FoodMenuCard from './../Components/FoodMenuCard';


const FoodMenu = () => {
  return (
    <Layout>
        <h1 className="text-5xl font-bold mb-6">รายการอาหารแนะนำ</h1>
        <hr />
        <div className='mt-4'>
            <FoodMenuCard 
                name = "ทะเลนึ่งซีฟู้ด"
                price = {2000}
                description = "ทะเล"
            />
            <FoodMenuCard 
                name = "ยำสามกรอบ"
                price = {1800}
                description = "ยำ"
            />
            <FoodMenuCard 
                name = "ข้าวผัดปู"
                price = {1800}
                description = "ข้าว"
            />
            <FoodMenuCard 
                name = "ต้มยำทะเล"
                price = {2000}
                description = "ต้มยำ"
            />
            <FoodMenuCard 
                name = "ปลากระพงนึ่งมะนาว"
                price = {1800}
                description = "ปลา"
            />
            <FoodMenuCard 
                name = "เต้าหู้นมสด"
                price = {1800}
                description = "ของหวาน"
            />
        </div>
    </Layout>
  )
}

export default FoodMenu;