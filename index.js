const express = require('express')
const cors= require('cors')
const { response } = require('express')





const app = express()
app.use(express.json())
app.use(cors())


app.get('/',(request,response)=>{
    response.send('<h1>hola mundo<h/1>')
})



const PORT = 3001
app.listen(PORT)
console.log(`server funcionando en puerto : ${PORT}`)
