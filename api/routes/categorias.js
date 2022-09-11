const express= require('express')
const router = express.Router()
const Categoria = require('../models/Categorias')


router.get('/',(req,res)=>{
  res.send('lista  categorias')
})

router.put('/',(req,res)=>{
  res.send('actualiza item lista de todos los categorias')
  //TODO: realizar actualizacion REST API hacia mongo

})

router.delete('/',(req,res)=>{
  res.send('borra item de lista de todos los categorias')
})

router.post('/',async (req,res,next)=>{
  // res.send('add item de lista de todos los categorias')
  //* realiza insercion categoria REST API hacia mongo
  const {
    content,
    desc,
    name
  } = req.body
  
  if (!content) {
    return res.status(400).json({
      error: 'required "content" field is missing'
    })
  }

  const newCategoria = new Categoria({
    Slug: content,
    desc: desc,
    name: name
  })
  try{
    const savedCategory= await newCategoria.save()
    res.json(savedCategory)
  }catch(error){
    next(error)
  }

})





module.exports=router 