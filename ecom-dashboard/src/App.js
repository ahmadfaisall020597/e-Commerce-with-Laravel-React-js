import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import Header from './Header';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
function Home(){
  return (
    <div>
    <Header />
    <h1>E-Commerce Dashboard</h1>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="Login" element={<Login />}></Route>
      <Route path="Register" element={<Register />}></Route>
      <Route path="Add" element={<AddProduct />}></Route>
      <Route path="Update" element={<UpdateProduct />}></Route>
      </Routes>
    </div>
  );
}

export default App;
