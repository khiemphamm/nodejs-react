import React,{ useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import ProductsItem from '../utils/ProductItems/ProductsItem'

const Products = () => {
    const state = useContext(GlobalState)
    const [products] = state.productsApi.products
    return (
        <div>
            <div className="products">
                {
                    products.map(product =>{
                        return <ProductsItem key={product._id} product={product}/>
                    })
                }
            </div>
            {/* {products.length === 0 && <Loading/>} */}
        </div>
        
    )
}

export default Products
