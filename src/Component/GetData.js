import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Catalog from './Catalog';

export default function GetData() {
    const [data,setdata] = useState([]);
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
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '20px',
      }}>
        {
            data.map((indidata)=>(
                <Catalog data={indidata} />
            ))
        }
    </div>
  )
}
