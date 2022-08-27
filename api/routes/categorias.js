const express= require('express')
const router = express.Router()


router.get('/',(req,res)=>{
  res.send('Lista de todas las categorias')
})

module.exports=router