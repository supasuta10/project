import React from 'react'

const FoodMenuCard = (props) => {
  return (
    <div className='mb-4 p-5 border border-red-700 rounded text-blue-700'>
        <p>Name : {props.name}</p>
        <p>Price : {props.price}</p>
        <p>Description : {props.description}</p>
        {/* <hr className='mt-2' /> */}
    </div>
  )
}

export default FoodMenuCard;