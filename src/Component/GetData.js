import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function GetData() {
    const [data,setdata] = useState();
    useEffect(()=>{
        getdata();
    },[]);
    const getdata = async ()=>{
        try{
            const response = await axios.get("https://fakestoreapi.com/products");
            setdata(response.data);
        }
        catch(error){
            console.log(error);
        }
    }
  return (
    <div>
        {
            data.map((indidata)=>(
                <div>
                    {indidata.title}
                </div>
            ))
        }
    </div>
  )
}
