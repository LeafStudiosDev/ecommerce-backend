const express= require('express')
const router = express.Router()
const Producto = require('../models/productos')


router.get('/',(req,res)=>{

  Producto.find({}).then(Productos => {
    res.json(Productos)
  })
})

router.put('/:id',(req,res,next)=>{
  const {id} = req.params
  const producto = req.body

  const newProductoInfo= {
    Slug: producto.content,
    desc: producto.desc,
    name: producto.name,
    price: producto.price,
    Discount: producto.Discount,
    total_price: producto.total_price,
    categoria: producto.categoria
  }
  Producto.findByIdAndUpdate(id,newProductoInfo,{new:true})
    .then(result =>{
      res.json(result)
    }).catch(next)

})

router.delete('/',(req,res)=>{
  res.send('borra item de lista de todos los productos')
})

router.post('/',async (req,res,next)=>{

  //* realiza insercion producto REST API hacia mongo
  const {
    content,
    desc,
    name,
    price,
    Discount,
    total_price,
    categoria
  }= req.body

  if(!content){
    return res.status(400).json({
      error: 'require "content" field is missing'
    })
  }
  const newProducto= new Producto({
    Slug: content,
    desc: desc,
    name: name,
    price: price,
    Discount: Discount,
    total_price: total_price,
    categoria: categoria
  })
  try{
    const savedProduct = await newProducto.save()
    res.json(savedProduct)
  }catch(error){
    next(error)
  }

})


module.exports=router