import React from 'react'

export default function Catalog({data}) {
  return (
        <div style={{width:250,
            height:250,
            border:"1px solid black",
            marginTop:10,
            marginLeft:10,
            boxShadow:"1px 1px 10px black",
            borderRadius:5
            }}>
            <h4>{data.title}</h4>
             <img src={data.image} style={{width:100,height:100}} />
        </div>
  )
}
