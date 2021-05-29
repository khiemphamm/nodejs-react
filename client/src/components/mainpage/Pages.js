import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import Details from './DetailsProduct/DetailsProduct'
import Products from './products/Products'
import NotFound from './utils/NotFound/NotFound'

const Pages = () => {
    return (
        <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/detail/:id" component={Details} />
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/cart" exact component={Cart}/>
            <Route path="*"  exact component={NotFound}/>
        </Switch>
    )
}

export default Pages
