import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Header(){
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

        </div>
    )
}
export default Header