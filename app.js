const express=require('express')
const connectdb=require('./config/connectDB')
const app=express()
require('dotenv').config()
app.use(express.json())
const cors = require('cors')

app.use(cors())
 

app.use('/userAPI', require('./routes/userRoutes'))
app.use('/objectAPI', require('./routes/objectRoutes'))


  
connectdb()
const port=(process.env.port) || 4001

app.listen(port,()=>console.log(`port listing on ${port}`))
 