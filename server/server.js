import dotenv from 'dotenv';
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import expressFileupload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import path from 'path'
import userRouter from './routes/userRoutes.js'
import categoryRouter from './routes/categoryRoutes.js'
import uploadRouter from './routes/upload.js'
import prodcutRouter from './routes/productRoutes.js'
import paymentRouter from './routes/paymentRoutes.js'



const app = express();
dotenv.config();
app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use(cors());
app.use(expressFileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));




//connecting mongoose db
mongoose.connect(process.env.MONGO_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`DB Connect`)
});
mongoose.connection.on('Error',err=>{
    console.log(`Error : ${err.message}`, )
})

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
}

//router
app.use('/user', userRouter);
app.use('/api',categoryRouter);
app.use('/api',uploadRouter);
app.use('/api',prodcutRouter)
app.use('/api',paymentRouter)

const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Localhost: ${port}`)
})

