import React, { Component, useState } from 'react';

class AddEmployee1 extends React.Component {
    constructor() {
        super()
        this.state = {
            id: null,
            name: null,
            designation: null,
            city: null
        }

    }
    addEmployee() {
        fetch("home/personDetails", {
            method: "Post",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((response) => {
                alert("Employee Added")
            })
        })
    }

    render() {
        return (<div class="App-header">
            <h1>Add Employee</h1>
            ID:<input onChange={(event) => { this.setState({ id: event.target.value }) }} /><br />
            Name:<input onChange={(event) => { this.setState({ name: event.target.value }) }} /><br />
            Designation:<input onChange={(event) => { this.setState({ designation: event.target.value }) }} /><br />
            City:<input onChange={(event) => { this.setState({ city: event.target.value }) }} /><br />
            <button onClick={() => { this.addEmployee() }}>Add Employee</button>
        </div>)
    }
}
/* function AddEmployee1(){
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
    if(res.data==="Check you ID"){
       alert("Please check your ID")
    }else{
        alert("Employee Added")
    }
})
    }
    function handle(e){
   const newData={...data}
   newData[e.target.id]=e.target.value
   setData(newData)
    }
    return(<div><form onSubmit={(e)=>submit(e)}>
      <h4> ID: <input onChange={(e)=>handle(e)} id="id" value={data.id} type="text"></input><br/>
       Name:<input onChange={(e)=>handle(e)} id="name" value={data.name} type="text"></input><br/>
       Designation:<input onChange={(e)=>handle(e)} id="designation" value={data.designation} type="text"></input><br/>
       City:<input onChange={(e)=>handle(e)} id="city" value={data.city} type="text"></input><br/></h4>
        <button>Submit</button>
        </form></div>)
} */

export default AddEmployee1;