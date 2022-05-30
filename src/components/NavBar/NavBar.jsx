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
                            <Nav.Link href="#productos" className='navbarFont'>Productos</Nav.Link>
                            <Nav.Link href="#promociones" className='navbarFont'>Promociones</Nav.Link>
                            <Nav.Link href="#Contacto" className='navbarFont'>Contacto</Nav.Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    )
}
