const express= require('express')
const router = express.Router()


router.get('/',(req,res)=>{
  res.send('lista  categorias')
})

router.put('/',(req,res)=>{
  res.send('actualiza item lista de todos los categorias')
})

router.delete('/',(req,res)=>{
  res.send('borra item de lista de todos los categorias')
})

router.post('/',(req,res)=>{
  res.send('add item de lista de todos los categorias')
})
module.exports=router 