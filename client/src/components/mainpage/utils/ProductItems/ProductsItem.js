import React, { useContext } from 'react'
import BtnRender from './BtnRender'

const ProductsItem = ({product}) => {
    return (
        <div className="product_card">
            <img src={product.images.url}/>
            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>{product.price}</span>
                <p>{product.description}</p>
            </div>
            <BtnRender product={product}/>
        </div>
    )
}

export default ProductsItem
