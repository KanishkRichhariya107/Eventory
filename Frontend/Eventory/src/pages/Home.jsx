import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";


const Home=()=>{
    const [events,setEvents]=useState([]);
    const [keyword,setKeyword]=useState('');
    const [date,setDate]=useState('');
    const [city,setCity]=useState('');

    const handleSearch=async(e)=>{
            e.preventDefault()
            try{
            const response= await axios.get('/api/events',{
                params:{keyword,city,date}
            })
            
         
            setEvents(response.data);
             console.log("events are fetched in frontend")
            
        }
        catch(error){
           console.error('error in fetching events',error);
        }
    }
    
    return (
        <div className="home">
            <h2> Seacrh events</h2>
            <form onSubmit={handleSearch} >
                <input 
                type="text"
                 placeholder="keyword"
                 value={keyword}
                 onChange={(e)=>setKeyword(e.target.value)}
                 />
                
                <input 
                type="text"
                 placeholder="city"
                 value={city}
                 onChange={(e)=>setCity(e.target.value)}
                 required
                 />
                 
                  <input 
                type="date"
                 value={date}
                 onChange={(e)=>setDate(e.target.value)}
                 required
                 />
                
                <button type="submit">Search</button>
            </form>

            <div className="event-list">
               { events.length>0?(
               
                events.map((parameter)=><EventCard key={parameter.id} event={parameter}/>)
             ):(
                <p> no events found</p>
             )
               }

            </div>
            
        </div>
        
    )
}
export default Home