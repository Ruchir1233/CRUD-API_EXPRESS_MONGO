const express = require('express')
const app=express()
const uri = "mongodb+srv://ruchir:ruchir@cluster0.pmpbcvg.mongodb.net/?retryWrites=true&w=majority";
const mongoose=require('mongoose')
// console.log("connected successfully")
mongoose.connect(uri);
// app.use("routers/product.js",productRoutes)
app.listen(3000,()=>console.log("server started"))
// const productController=require("./controllers/product_controller")
// app.get('/',productController.product_all);