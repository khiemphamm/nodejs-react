import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { GlobalState } from '../../../GlobalState';

const OrderDetail = () => {
    const params = useParams();
    const state = useContext(GlobalState)
    const [history] = state.userAPI.history
    const [orderDetail, setOrderDetails] = useState([]);
    console.log(`history`, history)

    useEffect(() => {
        if (params.id) {
            history.forEach(item => {
                if (item._id === params.id) setOrderDetails(item)
            })
        }
    }, [params.id, history])
    if (orderDetail.length === 0) return null
    return (
        <div>
            <div className="history-page">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Postal Code</th>
                            <th>Country Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{orderDetail.address.recipient_name}</td>
                            <td>{orderDetail.address.line1 + " - " + orderDetail.address.city}</td>
                            <td>{orderDetail.address.postal_code}</td>
                            <td>{orderDetail.address.country_code}</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Products</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody style={{ margin: "30px 0px" }}>
                        {
                            orderDetail.cart.map(item => (
                                <tr key="item._id">
                                    <td>
                                        <img src={item.images.url} width="70px" height="100px" />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price * item.quantity}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderDetail
