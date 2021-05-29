import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import ProductsItem from '../utils/ProductItems/ProductsItem';

const Details = () => {
    const params = useParams();
    const state = useContext(GlobalState)
    const [products] = state.productsApi.products
    const [detailProduct,setDetailProduct] = useState([])
    useEffect(() => {
        if(params.id){
            products.forEach(product => {
                if(product.product_id === params.id) 
                setDetailProduct(product)
            });
        }
    }, [params.id,products])
    if(detailProduct.length === 0) return null
    return (
        <>
            <div className="detail">
                <img src={detailProduct.images.url} />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                    </div>
                    <span>{detailProduct.price}</span>
                    <p>{detailProduct.description}</p>
                    <p>{detailProduct.content}</p>
                    <p>Sold: {detailProduct.sold}</p>
                    <Link to="/cart" className="cart">Buy now</Link>
                </div>
            </div>
            <div>
                <h2>Related Product</h2>
                <div className="products">
                    {
                        products.map(product=>{
                            return product.category === detailProduct.category
                                ? <ProductsItem key={product._id} product={product} /> :null
                        })
                    }
                </div>
            </div>
        </>
        )
}

export default Details
