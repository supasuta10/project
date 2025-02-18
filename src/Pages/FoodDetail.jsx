import React from 'react'
import Layout from '../Template/Layout'
import { useParams } from 'react-router-dom'

const FoodDetail = () => {
    const {id} = useParams();
  return (
    <Layout>
        <h1 className="text-5xl font-bold">FoodDetail</h1>
        <p>ID: {id}</p>
    </Layout>
  )
}

export default FoodDetail