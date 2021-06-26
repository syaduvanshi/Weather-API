import React, { useEffect, useState } from "react";

const Temp=()=>{
    const [city, setcity] =useState(null);
    const[search ,setsearch]=useState("Mumbai");

    useEffect(()=>{
       
        const fetchApi =async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a5b59c25fec6717484d6a98757f9b8c6`
            const response = await fetch(url);
            const resJson = await response.json();
        //    console.log(resJson);
           setcity(resJson.main);
        }
 
         fetchApi();
       

    },[search])
  
return( <>
     
     <div className="box">
         <div className="inputData">
             <input
             type="search"
             className="inputField" 
             placeholder="Mumbai"
             onChange={(event)=>{
                 setsearch(event.target.value)

             }}
             />
      
         </div>

         {!city ? (
                 <p>No Data Found</p>
             ): (
                 <div>
                      <div className="info">
         <h2 className="location">
         <i className="fas fa-street-view" id="weathericon"></i>
          {search}
         </h2>
         <h1 className="temp">
             {city.temp}°C
         </h1>
         <h3 className="tempmin_max">
             Min : {city.temp_min}°C | Max : {city.temp_max}°C
         </h3>
     </div>

     <div className="wave -one"></div>
     <div className="wave -two"></div>
     <div className="wave -three"></div>
                 </div>
             )
         }
     

     

     </div>

  
    

</>)
}

export default Temp;