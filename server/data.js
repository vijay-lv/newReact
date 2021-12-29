const express=require('express')
const db=require('./db.json')
const mysql=require('mysql')
const app=express()
const con=mysql.createConnection(db)

con.connect((err,result)=>{
    if(err){
        console.log(err)
    }
    console.log('connected...')
})

let dbService={
    getAl:()=>{
        let response=new Promise((resoleve,reject)=>{

            const quer='SELECT * FROM names'

            con.query(quer,(err,result)=>{

                if(err){
                    reject(err)
                }
                resoleve(result)
            })

        })
        return response

    },
    creat:(data)=>{
        
        let response =new Promise((resoleve,reject)=>{
           
            const qur="Insert Into names (name,email) values(?,?)"
            con.query(qur,[data.name,data.email],(err,result)=>{

                if(err){
                    reject(err)
                }
                resoleve(result)
            })
        })
        return response
    },
    getOn:(id)=>{

        let response=new Promise((resolve,reject)=>{
            const qur="Select * from names WHERE id=?"

            con.query(qur,id,(err,result)=>{
                if(err){
                    reject(err)
                }
                resolve(result)
            })
        })
        return response
    },
    delete:(id)=>{

        let response=new Promise((resolve,reject)=>{

            const qur="DELETE FROM names where id=?"
            con.query(qur,id,(err,result)=>{
                if(err){
                    reject(err)
                }
                resolve(result)
            })
        })
        return response
    },
    upda:(data,id)=>{ 

        let response=new Promise((resolve,reject)=>{
            const qur="UPDATE names set name=?, email=? where id=?"
                 con.query(qur,[data.name,data.email,id],(err,result)=>{
                        if(err){

                            reject(err)
                          }
                          resolve(result)
        })
        })
        
        return response
    }
}
module.exports=dbService