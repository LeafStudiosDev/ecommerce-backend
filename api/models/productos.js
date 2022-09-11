
const {Schema, model} = require('mongoose')
const productSchema= new Schema({
  Slug: String,
  desc: String,
  name: String,
  price: Number,
  Discount: String,
  total_price: Number,
  categoria: String
})

productSchema.set('toJSON',{
  transform: (document, returnedObject)=>{
    returnedObject.id = returnedObject._id
    
    delete returnedObject.id
    delete returnedObject._id
    delete returnedObject.v
    delete returnedObject.__v
  }
})


const producto = model('productos', productSchema)
module.exports = producto