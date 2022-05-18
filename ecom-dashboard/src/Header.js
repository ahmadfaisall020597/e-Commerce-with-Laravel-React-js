import { useEffect, useState } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const textMenu = (
    <div className="flex flex-row items-center h-full">
      {
        localStorage.getItem("user-info") ? (
            <>
                <Link to="/list">Product List</Link>
                <Link to="/add">Add Products</Link>
                <Link to="/update">Update Products</Link>
            </>
        ) : (
            <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </>)
      }
    </div>
  )

  const menuIcon = (
    <svg className="h-6 w-6 stroke-2 stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  )

  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logout() {
      localStorage.clear();
      navigate("/register");
  }

  const [navigator, setNavigator] = useState(textMenu);
  useEffect(() => {
    const responsiveHandler = () => {
        console.log('handler')
      if (window.matchMedia('(max-width: 768px)').matches) {
        console.log('match 768')
        setNavigator(menuIcon);
      } else {
        console.log('match')
        setNavigator(textMenu);
      }
    }

    window.addEventListener('resize', responsiveHandler);
  }, []);

  return (
    <div className="w-screen px-12 bg-slate-900 flex flex-row items-center justify-between py-2">
      <p className="text-white text-xl">e-Commerce</p>
      {navigator}
    </div>
  )
}


/* function Header() {
    console.warn(user);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">e-Commerce</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                        {
                            localStorage.getItem("user-info") ? (
                                <>
                                    <Link to="/list">Product List</Link>
                                    <Link to="/add">Add Products</Link>
                                    <Link to="/update">Update Products</Link>
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
} */
export default Header