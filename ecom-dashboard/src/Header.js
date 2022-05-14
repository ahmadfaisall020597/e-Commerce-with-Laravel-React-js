import { Navbar, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate("/register");
    }
    console.warn(user);
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">e-Commerce</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                        {
                            localStorage.getItem("user-info") ? (
                                <>
                                    <Link to="/add">Add Products</Link>
                                    <Link to="/update">Update AddProducts</Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/login">Login</Link>
                                    <Link to="/register">Register</Link>
                                </>
                            )}
                    </Nav>
                    {localStorage.getItem("user-info") ?
                        <Nav>
                            <NavDropdown title={user && user.name}>
                                <NavDropdown.ItemText onClick={(logout)}>
                                    Logout
                                </NavDropdown.ItemText>
                            </NavDropdown>
                        </Nav>
                        : null
                    }
                </Container>
            </Navbar>

        </div>
    )
}
export default Header