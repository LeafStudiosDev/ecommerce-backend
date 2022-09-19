const express= require('express')
const router = express.Router()
const Categoria = require('../models/Categorias')


router.get('/',(req,res)=>{
  
  Categoria.find({}).then(categorias => {
    res.json(categorias)
  })
})

router.put('/:id',(req,res,next)=>{
  // res.send('actualiza item lista de todos los categorias')
  //* realiza actualizacion de categorias por nombre REST API hacia mongo
  const {id} = req.params
  const categoria = req.body
  const newCategoriaInfo= {
    Slug: categoria.content,
    desc: categoria.desc,
    name: categoria.name
  }
  Categoria.findByIdAndUpdate(id,newCategoriaInfo,{new:true})
    .then(result =>{
      res.json(result)
    }).catch(next)


})

router.delete('/:id', async (req,res)=>{
  const { id } = req.params
  const result = await Categoria.findByIdAndDelete(id)
  if (result === null) return res.sendStatus(404)
  res.status(204).end()
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