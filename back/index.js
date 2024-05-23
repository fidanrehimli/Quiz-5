const express = require("express")
const cors = require("cors")
const  bodyParser = require('body-parser')
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
dotenv.config()
const {Schema}=mongoose


const pulseSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    parag:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
})

const Pulse = mongoose.model("Pulse",pulseSchema)

app.post("/pulse",async(req,res)=>{
    try{
        const {title,parag,price}=req.body
        const pulse = new Pulse ({
            title,
            parag,
            price
        })
        await pulse.save()
        res.status(201).send(pulse)
    }catch(err){
        res.status(500).send(err)
    }
})

app.get("/pulse",async(req,res)=>{
    try{
        const pulse = await Pulse.find({})
        res.status(200).send(pulse)
    }catch(err){
        res.status(500).send(err)
    }
}
)

app.delete("/pulse/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const pulse = await Pulse.findByIdAndDelete(id)
        res.status(200).send(pulse)
    }catch(err){
        res.status(500).send(err)
    }
})

app.get("/pulse/:id",async(req,res)=>{
    try{
        const {id}= req.params
        const pulse = await Pulse.findById(id)
        res.status(200).send
        (pulse)
    }catch(err){
        res.status(500).send(err)
    }
})

app.put("/pulse/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const pulse = await Pulse.findByIdAndUpdate(id,{
            title,
            parag,price
        })
        res.status(200).send(pulse)
    }catch(err){
        res.status(500).send(err)
    }
})

const PORT=process.env.PORT
const DB=process.env.DB_URL

app.listen(PORT,console.log("Port is active",PORT))
mongoose.connect(DB).then(()=>console.log("Connected!"))