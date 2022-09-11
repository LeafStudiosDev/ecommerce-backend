const mongoose = require('mongoose')
require('dotenv').config()
const password = process.env.PASSWORD
const usuario = process.env.USUARIO 
const connectionString = `mongodb+srv://${usuario}:${password}@cluster0.en2ygtp.mongodb.net/backend?retryWrites=true&w=majority`


// // conexion a mongo


mongoose.connect(connectionString)
  .then(() => {
    console.log('Database conectada')
  }).catch(err => {
    console.error(err)
  })



