const mongoose=require('mongoose')

const reportDetails=new mongoose.Schema({
    userID: [String],
    marketID: String,
    marketName:String,
    cmdtyID:String,
    marketType: String,
    cmdtyName: String,
    price:[Number]
})
module.exports=mongoose.model('report',reportDetails)