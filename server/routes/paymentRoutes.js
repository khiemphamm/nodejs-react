import express from 'express'
import { createPayment, getPayments } from '../controllers/paymentController.js';
import { auth } from '../middleware/auth.js';
import {authAdmin} from '../middleware/authAdmin.js'
const routes = express.Router();

routes.get('/payment',auth,authAdmin,getPayments)
routes.post('/payment',auth,createPayment)

export default routes