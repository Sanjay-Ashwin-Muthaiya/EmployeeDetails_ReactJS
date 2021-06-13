import React,{ Component } from "react";
import axios from "axios";
class Employee extends Component{
    constructor(){
        super()
        this.state={
            employee:[]
        }
    }


    componentDidMount(){
        axios.get('/home/personDetails')
        .then(response=>{
            this.setState({
                employee:(response.data)
            })
            console.log(response.data)
        })
    }
    render(){
        const{employee} =this.state
        return(<div><h2>Hurrey Employees</h2>
  
        <ol>{this.state.employee.map(employee=>
        <li key={employee.id}><h3>Name: {employee.name} Designation: {employee.designation} City: {employee.city}</h3></li>)}</ol></div>)
    }
}

export default Employee;
