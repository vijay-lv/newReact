const express=require('express')
const data=require('./controllers/nameController')
const router=express.Router()
router.get("/begin",data.getAll)
router.get("/begin/:id",data.getOne)
router.post("/begin",data.create)
router.delete("/begin/:id",data.dlt)
router.put('/begin/:id',data.update)
module.exports=router