import React, { useContext } from 'react'
import {Switch, Route} from 'react-router-dom'
import { GlobalState } from '../../GlobalState'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import Categories from './category/Categories'
import CreateProduct from './create-product/CreateProduct'
import Details from './DetailsProduct/DetailsProduct'
import OrderDetail from './history/OrderDetail'
import OrderHistory from './history/OrderHistory'
import Products from './products/Products'
import NotFound from './utils/NotFound/NotFound'

const Pages = () => {
    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    return (
        <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/detail/:id" component={Details} />
            <Route path="/login" exact component={isLogged ? NotFound : Login}/>
            <Route path="/register" exact component={isLogged ? NotFound : Register}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="/category" exact component={isAdmin ? Categories :NotFound}/>
            <Route path="/history" exact component={isLogged?OrderHistory:NotFound}/>
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/history/:id" exact component={isLogged ?OrderDetail:NotFound}/>


            {/* ---------------------------------------- */}
            <Route path="*"  exact component={NotFound}/>
            
        </Switch>
    )
}

export default Pages
