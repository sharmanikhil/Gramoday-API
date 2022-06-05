const express=require('express')
const app=express()
const routes=require('./routes')
require('./db/connection')
require('dotenv').config()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const port=process.env.PORT||3000
app.use(routes)
app.listen(port,()=>{
    console.log(`Application is running on port ${port} and url is localhost:${port}`)
})