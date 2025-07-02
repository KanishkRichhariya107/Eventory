const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const axios=require('axios');
const { getEvents } = require('./controllers/econtroller');
require('dotenv').config();

const app=express();
app.use(cors());
app.use(express.json());

const API_KEY=process.env.API_KEY

app.get('/api/events',getEvents)


app.listen(4000,()=>{
    console.log("app is running on port 4000")
})