
import React from 'react';
import { Table} from 'react-bootstrap-table';

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      employee: []
    }
  }

  componentDidMount() {
    const apiUrl = 'home/personDetails';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            employee: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

 

  render() {
    const { error, employee} = this.state;

    if(error) {
      return (
        <div>{error.message}</div>
      )
    } else {
      return(
        <div>
          <h2>Employee List</h2>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {employee.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.designation}</td>
                  <td>{employee.city}</td>
                </tr>
              ))}
            </tbody>
        </div>
      )
    }
  }
}

export default EmployeeList;
