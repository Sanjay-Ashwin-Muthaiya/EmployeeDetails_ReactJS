import React, { useState } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';


function AddEmployee(){
    const url="home/personDetails"
    const[data,setData]=useState({
        id:'',
        name:'',
        designation:'',
        city:''
    })

    function submit(e){
e.preventDefault();
axios.post(url,{
    id:parseInt(data.id),
    name:data.name,
    designation:data.designation,
    city:data.city
}).then(res=>{
    if(res.data==="Check you ID")
       alert("Please check your ID")
})
    }
    function handle(e){
   const newData={...data}
   newData[e.target.id]=e.target.value
   setData(newData)
    }
    return(<div><form onSubmit={(e)=>submit(e)}>
       <h2> ID:</h2> <input onChange={(e)=>handle(e)} id="id" value={data.id} type="text"></input><br/>
       <h2> Name:</h2><input onChange={(e)=>handle(e)} id="name" value={data.name} type="text"></input><br/>
       <h2> Designation:</h2><input onChange={(e)=>handle(e)} id="designation" value={data.designation} type="text"></input><br/>
       <h2>City:</h2><input onChange={(e)=>handle(e)} id="city" value={data.city} type="text"></input><br/>
        <button>Submit</button>
        </form></div>)
}

export default AddEmployee;