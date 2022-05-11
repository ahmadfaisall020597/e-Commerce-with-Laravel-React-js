import {Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
function AddProduct(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">e-Commerce</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/Add">Add Product</Link>
                        <Link to="/update">Update Product</Link>
                    </Nav>
                </Container>
            </Navbar>
            <h1>Halaman Add Product</h1>
        </div>
    )
}
export default AddProduct