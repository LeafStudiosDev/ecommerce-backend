const express= require('express')
const router = express.Router()


router.get('/',(req,res)=>{
  res.send('lista items de productos')
})

router.put('/',(req,res)=>{
  res.send('actualiza item lista de todos los productos')
})

router.delete('/',(req,res)=>{
  res.send('borra item de lista de todos los productos')
})

router.post('/',(req,res)=>{
  res.send('add item de lista de todos los productos')
})


module.exports=router