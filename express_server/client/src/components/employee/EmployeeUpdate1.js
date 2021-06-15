import React, { Component, useState } from 'react';

class EmployeeUpdate1 extends React.Component {
    constructor() {
        super();

        this.state = {
            id: null,
            name: null,
            designation: null,
            city: null,

        }
    }

    componentDidMount() {
        var feat = this.props.location.pathname;
        feat = feat.split("/")
        fetch("home/personDetails/" + feat[1]).then((response) => {
            response.json().then((result) => {
                this.setState({
                    id: result.id,
                    name: result.name,
                    designation: result.designation,
                    city: result.city,


                })
            })
        })
    }
    updateEmployee() {
        this.setState({ id: null })
        var feat = this.props.location.pathname;
        feat = feat.split("/")
        fetch("home/personDetails/" + feat[1], {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((response) => {
                alert("Updated Successfully")
            })
        })

    }

    render() {

        if (this.state.id != null) {
            return (
                <div class="App-header">
                    <h1>Update Employee</h1>
                    ID:<input onChange={(event) => { this.setState({ id: event.target.value }) }} value={this.state.id} /><br />
                    Name:<input onChange={(event) => { this.setState({ name: event.target.value }) }} value={this.state.name} /><br />
                    Designation:<input onChange={(event) => { this.setState({ designation: event.target.value }) }} value={this.state.designation} /><br />
                    City:<input onChange={(event) => { this.setState({ city: event.target.value }) }} value={this.state.city} /><br />
                    <button onClick={() => { this.updateEmployee() }}>Update Employee</button>
                </div>)
        } else {
            return (<div></div>)
        }
    }

}

export default EmployeeUpdate1;