import logo from './logo.svg';
import './App.css';
import Employee from './components/employee/employee'
import EmployeePost from  './components/employee/employeepost'
function App() {
  return (
    <div className="App">
    <EmployeePost/>
      <Employee/>
      
    </div>
  );
}

export default App;
