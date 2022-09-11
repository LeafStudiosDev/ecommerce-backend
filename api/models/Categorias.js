const {Schema, model} = require('mongoose')
const categoriaSchema= new Schema({
  Slug: String,
  desc: String,
  name: String
})

categoriaSchema.set('toJSON',{
  transform: (document, returnedObject)=>{
    returnedObject.id = returnedObject._id
    returnedObject.v=returnedObject.__v
    delete returnedObject.id
    delete returnedObject._id
    delete returnedObject.v
    delete returnedObject.__v
  }
})


const categoria = model('categorias', categoriaSchema)
module.exports = categoria