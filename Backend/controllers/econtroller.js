const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const axios=require('axios');
require('dotenv').config();


const getEvents=async(req,res)=>{
     try {
         const API_KEY=process.env.API_KEY
        const { keyword = "", city = "Delhi" , date=""} = req.query;
         const params = {
      apikey: API_KEY,
      city,
      keyword
      
    };

        const response=await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json`,{params});

    //     if (date) {
    //   params.startDateTime = `${date}T00:00:00Z`;
    //   params.endDateTime = `${date}T23:59:59Z`;
    // }


        const events=response.data._embedded?.events||[]
    
        if(events.length==0){
            console.log('no events')
        }else{
            console.log("fetched events");
            events.forEach((event)=>{
                console.log(event.name)
            })
            
        }
        res.json(events);
    }
        catch(error){
            console.log("could not fetch",error.message);
             res.status(500).json({ error: "Failed to fetch data" });
        }
    };
module.exports={getEvents}