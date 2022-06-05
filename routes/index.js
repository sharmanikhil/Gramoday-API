const { application } = require('express')
const express=require('express')
const router=express.Router()
const reportController=require('../controller/reportController')
const getReport=require('../controller/getReportController')
router.get('/reports',getReport)
router.post('/reports',reportController)
router.get('/',(req,res)=>{
    res.json({
        "timeStamp":Math.floor(Date.now()/1000).toString(),
        "status":"Application is successfully running.."
    })
})
module.exports=router