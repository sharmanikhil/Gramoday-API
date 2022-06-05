const Report=require('../models/report')

const addReportController = async(req,res)=>{
    let c=req.query.reportID;
    if(c)
    {
        let d=await Report.findOne({
            _id: c
        })
        console.log(d)
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
    let document=req.body.reportDetails
    let a=parseInt(document.price)/parseInt(document.convFctr)
    var f=undefined
    f=await Report.findOne({
        cmdtyName: document.cmdtyName
    })
    if(f){
        f.userID.push(document.userID);
        f.price.push(a);
        f.save();
        return res.json({
            status: "success",
            reportID: f._id
        }
     )
    }
    try{
        let document1=new Report({
            userID:document.userID,
            marketID: document.marketID,
            marketName:document.marketName,
            cmdtyID:document.cmdtyID,
            marketType: document.marketType,
            cmdtyName: document.cmdtyName,
            price:a
        })
        await document1.save()
        console.log(document.userID)
        
    }catch(err){
        res.json(err)
    }
    f=await Report.findOne({
        cmdtyName: document.cmdtyName
    })
    return res.json({
        status: "success",
        reportID:f._id 
    })
}
module.exports=addReportController
