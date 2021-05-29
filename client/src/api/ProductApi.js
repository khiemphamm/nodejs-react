import React, { useEffect, useState } from 'react'
import { axiosClient } from './axiosClient'
const ProductApi = () => {
    const [products,setProducts] = useState([])
    const getProducts = async ()=>{
        const res = await axiosClient.get(`/api/products`)
        setProducts(res.data.products)
    }
    useEffect(()=>{
        getProducts()
    },[])

    return {
        products:[products,setProducts]
    }
}

export default ProductApi
