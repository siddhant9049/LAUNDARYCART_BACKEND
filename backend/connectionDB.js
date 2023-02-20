const mongoose=require('mongoose')
require('dotenv').config();
const mongoURL=process.env.mongoURL
const key = process.env.key
const Url=process.env.Url
mongoose.set('strictQuery', true)
mongoose.connect(Url)

// mongoose.connect(key)
mongoose.connection.on("connected",()=>console.log("Database Connected !!"))
mongoose.connection.on("error",()=>console.log("Database Connection error !!"))