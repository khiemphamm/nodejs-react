import React from 'react'
import { Link } from 'react-router-dom'

const BtnRender = ({product}) => {
    return (
        <div>
            <div className="row_btn">
                <Link id="btn_buy" to="">
                    Buy
                </Link>
                <Link id="btn_view" to={`/detail/${product.product_id}`}>View</Link>
            </div>
        </div>
    )
}

export default BtnRender
