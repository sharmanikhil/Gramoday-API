const Report=require('../models/report')

const getReportController = async(req,res)=>{
    let c=req.query.reportID;

    if(c)
    {
        let d=await Report.findOne({
            _id: c
        })
        let ob={
            "_id":d._id,
            "cmdtyName": d.cmdtyName,
            "cmdtyID": "VE-42",
            "marketID": d.marketID,
            "marketName": d.marketName,
            "users": d.userID,
            "timestamp": Math.floor(Date.now()/1000).toString(),
            "priceUnit": "Kg",
            "price": 0
          }
        let s=0;
        let arr=d.price;
        for(let i=0;i<arr.length;i++)
        {
            s+=arr[i];
        }
        ob.price=s/arr.length;
        return res.json(ob);
    }
    else{
        return res.json({
            status:"ReportID is not provided."
        })
    }
}

module.exports=getReportController;