import { useCallback, useEffect, useMemo, useState } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function MenuIcon(props) {
  const { clickHandler } = props;
  return (
    <button type='button' onClick={clickHandler}>
      <svg className="h-6 w-6 stroke-2 stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  )
}

function Header() {
  const userInfo = localStorage.getItem("user-info");
  const user = JSON.parse(userInfo);

  const textMenu = (
    <div className="flex flex-row items-center h-full">
      {
        userInfo
          ? (<>
            <Link to="/list">Product List</Link>
            <div className='w-4' />
            <Link to="/add">Add Products</Link>
            <div className='w-4' />
            <Link to="/update">Update Products</Link>
          </>)
          : (<>
            <Link to="/login">Login</Link>
            <div className='w-4' />
            <Link to="/register">Register</Link>
          </>)
      }
      {
        user
          ? (<>
            <div className='w-12' />
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.ItemText onClick={(logout)}>
                  Logout
                </NavDropdown.ItemText>
              </NavDropdown>
            </Nav>
          </>)
          : null
      }
    </div>
  )

  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    console.log(showMenu);
      if (window.matchMedia('(max-width: 768px)').matches) {
        setNavigator(<MenuIcon clickHandler={() => setShowMenu(!showMenu)}/>);
      }
  }, [showMenu])

  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/register");
  }

  const [navigator, setNavigator] = useState(<div />);
  useEffect(() => {
    const responsiveHandler = () => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        setNavigator(<MenuIcon clickHandler={() => setShowMenu(!showMenu)}/>);
      } else {
        setShowMenu(false)
        setNavigator(textMenu);
      }
    }
    responsiveHandler();

    window.addEventListener('resize', responsiveHandler);
  }, []);

  return (
    <div className='relative'>
      <div className="w-screen px-12 bg-slate-900 flex flex-row items-center justify-between h-full py-2 relative">
        <div className='h-full flex items-center justify-center'>
          <h1 className="text-white text-3xl">e-Commerce</h1>
        </div>
        {navigator}
      </div>
      <div className={`w-screen px-12 bg-slate-900 relative -top-1 flex flex-col items-start ${showMenu ? 'block' : 'hidden'}`}>
      {
        userInfo
          ? (<>
            <Link to="/list">Product List</Link>
            <div className='w-4' />
            <Link to="/add">Add Products</Link>
            <div className='w-4' />
            <Link to="/update">Update Products</Link>
          </>)
          : (<>
            <Link to="/login">Login</Link>
            <div className='w-4' />
            <Link to="/register">Register</Link>
          </>)
      }
      {
        user
          ? (<>
            <div className='w-12' />
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.ItemText onClick={(logout)}>
                  Logout
                </NavDropdown.ItemText>
              </NavDropdown>
            </Nav>
          </>)
          : null
      }
      </div>
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