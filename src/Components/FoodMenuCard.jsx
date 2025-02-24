import React from 'react'

const FoodMenuCard = (props) => {
  return (
    <div className='mb-4 p-5 border border-green-500 rounded text-green-900'>
        <p>ชื่ออาหาร : {props.name}</p>
        <p>กลุ่มราคา : {props.menuPrice}</p>
        <p>ประเภทอาหาร : {props.description}</p>
        {/* <hr className='mt-2' /> */}
    </div>
  )
}

export default FoodMenuCard;