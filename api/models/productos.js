
const {schema, model} = require('mongoose')
const productSchema= new schema({
  Slug: String,
  desc: String,
  name: String,
  price: Number,
  Discount: String,
  total_price: Number,
  categoria: {
    type: schema.Types.ObjectId,
    ref : 'categorias'
  }
})

productSchema.set('toJSON',{
  transform: (document, returnedObject)=>{
    returnedObject.id = returnedObject._id
    delete returnedObject.id
    delete returnedObject._id
  }
})


const producto = model('productos', productSchema)
module.exports = producto