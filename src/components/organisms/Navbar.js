
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';




function BarraNavegacion({mostrarCarrito, setMostrarCarrito, contadorCarrito}) {

const [contadorVisible, setContadorVisible] = useState(false);

useEffect(() => {
  setContadorVisible(contadorCarrito > 0);
}, [contadorCarrito]);

const handleCheckboxChange = () => {
  setMostrarCarrito(!mostrarCarrito);
};


  return (
    <>
    <Navbar expand="lg" className="navbar-dark bg-dark fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            className="freshness"
            src= "./images/freshness.jpg"
            width="70px"
            alt="freshness"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#comentarios">Comentarios</Nav.Link>
            
            <NavDropdown title="Mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#contacto">Contáctanos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
        <label className='carrito' >
          <input type="checkbox" onChange={handleCheckboxChange} hidden/>

            <img
                src='./images/logo-tienda32pxwhite.png'
                width="32px"
                alt="cart" 
            />
            {contadorVisible && <p className= "contador">+{contadorCarrito}</p>}
            
        </label>
      </Container>
    </Navbar>

    <style jsx>{`
    .carrito {
      display: flex;
      flex-direction: row;
    }

    .contador {
      color: white;
      margin-left: 10px;

    }
    `}</style>
    </>
  );
}

export default BarraNavegacion;

 