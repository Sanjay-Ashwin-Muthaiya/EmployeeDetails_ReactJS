import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import EmployeeList1 from './components/employee/EmployeeList1'
import EmployeeAdd1 from './components/employee/EmployeeAdd1'
import EmployeeUpdate1 from './components/employee/EmployeeUpdate1'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/list">List</Link>
          <Link to="/">Update</Link>
          <Link to="/create">Create</Link>
          <Route path="/list">
            <EmployeeList1 />
          </Route>
          <Route path="/"
            render={props => (
              <EmployeeUpdate1 {...props} />
            )}>
          </Route>
          <Route path="/create">
            <EmployeeAdd1 />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
