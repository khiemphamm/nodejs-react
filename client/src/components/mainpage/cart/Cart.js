import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'
import Paypal from './Paypal'

const Cart = () => {
    const state = useContext(GlobalState)
    const [cart,setCart] = state.userAPI.cart;
    const [token] = state.token
    const [total,setTotal] = useState(0);

    useEffect(()=>{
        const getTotal = () =>{
            const total = cart.reduce((prev,item)=>{
                return prev + (item.price * item.quantity)
            },0)
            setTotal(total)
        }
        getTotal()
    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart',{cart},{
            headers:{Authorization:token}
        })
    }

    const increment = (id) =>{
        cart.forEach(item=>{
            if(item._id === id){
                item.quantity += 1
            }
        })
        addToCart(cart)
        setCart([...cart])
    }

    const decrement = (id) =>{
        cart.forEach(item=>{
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })
        addToCart(cart)
        setCart([...cart])
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to delete product")){
            cart.forEach((item,index)=>{
                if(item._id === id){
                    cart.splice(index,1)
                }
            })
            addToCart(cart)
            setCart([...cart])
        }
    }

    const tranSuccess = async(payment) =>{
        const {paymentID,address} = payment;
        await axios.post('/api/payment',{cart,paymentID,address},{
            headers:{Authorization:token}
        })
        setCart([])
        addToCart(cart)
        alert("You have been oke")
    }

    if (cart.length === 0)
        return <h2 style={{ textAlign: "center", fontSize: "4.5rem" }}>Cart Empty</h2>
    return (
        <div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src={product.images.url} className="img_container" />
                        <div className="box-detail">
                            <h3>{product.title}</h3>
                            <span>${product.price * product.quantity}</span>
                            <div className="amount">
                                <button onClick={()=>decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={()=>increment(product._id)}> + </button>
                            </div>
                            <div className="delete" onClick={()=>removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <h3>Total: ${total}</h3>
                <Paypal total={total} tranSuccess = {tranSuccess}/>
                
                
            </div>
        </div>
    )
}

export default Cart
