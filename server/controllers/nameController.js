const express=require('express')
const app=express()
const dbService=require('../data')
let da={

     create:(req,res)=>{
       let rt=req.body;
       const result= dbService.creat(rt)
       console.log('vijay',result)
       result.then(data=>res.json(data))
       
     },
    getAll:(req,res)=>{

        console.log('inside controller')
        const result= dbService.getAl()
        result.then(data=>res.json(data))
    //    return res.status(200).json(result)

    },
    getOne:(req,res)=>{
        //console.log('inside getone')
        let id=req.params.id
        console.log(id,'inside getone')
        const result=dbService.getOn(id)
        result.then(data=>res.json(data)).catch(err=>{
            console.log(err)
        })
    },
    dlt:(req,res)=>{

        const id=req.params.id
        console.log(id,'inside delete')
        const result=dbService.delete(id)

        result.then(data=>res.json(data))
    },
    update:(req,res)=>{ 

        const data=req.body
        const id=req.params.id
       const result= dbService.upda(data,id)
       result.then(dat=>res.json(dat))
    }

}
module.exports=da