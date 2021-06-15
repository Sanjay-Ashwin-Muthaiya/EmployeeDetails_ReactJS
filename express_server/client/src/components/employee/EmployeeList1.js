import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class EmployeeList1 extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        fetch("/home/personDetails").then((res) => {
            res.json().then((result) => {
                this.setState({
                    data: result
                })
            })
        })
    }
    delete(id) {
        fetch("home/personDetails/" + id, {
            method: "DELETE",
        }).then((result) => {
            result.json().then((response) => {
                alert("Employee has deleted")
                this.getData()
            })
        })
    }

    render() {
        return (<div>
            <h1>Employee List</h1>
            {
                this.state.data ?
                    <div class="App-header">
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.data.map((item, i) =>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.designation}</td>
                                            <td>{item.city}</td>
                                            <td><a href={"/" + item.id}>Update</a></td>
                                            <td><button onClick={() => this.delete(item.id)}>Delete</button></td>
                                        </tr>)
                                }
                            </tbody>
                        </Table>
                    </div>
                    : <p>Please Wait</p>
            }
        </div>)
    }
}

export default EmployeeList1;