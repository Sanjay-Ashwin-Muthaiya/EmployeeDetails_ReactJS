import React,{Component} from "react";
import axios from "axios";
class EmployeePost extends Component{
    constructor(props){
        super(props)
        this.state={
            id:'',
            name:'',
            designation:'',
            city:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('/home/personDetails',this.state)
        .then(response=>{
            console.log(response.data)
           
        })
    }
    render(){
        return(<div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h2>Add New Employee</h2>
                <label>User ID</label>
            <input type="text" name="id" value={this.state.id}
            onChange= {this.handleChange}></input>
            </div>
            <div>
                <label>Name</label>
            <input type="text" name="name" value={this.state.name}
            onChange= {this.handleChange}></input>
            </div>
            <div>
                <label>Designation</label>
            <input type="text" name="designation" value={this.state.designation}
            onChange= {this.handleChange}></input>
            </div>
            <div>
                <label>City</label>
            <input type="text" name="city" value={this.state.city}
            onChange= {this.handleChange}></input>
            </div>
            <div><button type="submit">Submit</button></div>
            </form>
        </div>)
    }
}

export default EmployeePost