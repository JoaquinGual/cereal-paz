import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { CartWidget } from './CartWidget/CartWidget'
import LogoNala from '../../img/LogoNala.png'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (
        <>
            <Navbar className='navbarBackground navbarFont' expand="lg">
                <Container>
                    <Navbar.Brand><img src={LogoNala} alt='Logo Nala' className='logoNala'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link navbarFont' to="/">Inicio</Link>
                            <Link className='nav-link navbarFont' to="/productos">Productos</Link>
                            <Link className='nav-link navbarFont' to="/promociones">Promociones</Link>
                            <Link className='nav-link navbarFont' to="/contacto">Contacto</Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    )
}
