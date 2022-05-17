import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { Routes, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProducts from './AddProducts';
import UpdateProducts from './UpdateProducts';
import Protected from './Protected';
import ProductListing from './ProductListing';
// function Home(){
//   return (
//     <div>
//     <Header />
//     <h1>DashboardE-Commerce </h1>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="Login" element={<Login />}></Route>
        <Route path="Register" element={<Register />}></Route>
        <Route path="Add" element={<Protected Cmp={<AddProducts />} />} />
        <Route path="Update" element={<Protected Cmp={<UpdateProducts />} />} />
        <Route path="list" element={<Protected Cmp={<ProductListing />} />} />
      </Routes>
    </div>
  );
}

export default App;
