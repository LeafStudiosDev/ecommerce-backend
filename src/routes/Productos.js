const express= require('express')
const router = express.Router()


router.get('/',(req,res)=>{
  res.send('lista de todos los productos')
})

module.exports=router