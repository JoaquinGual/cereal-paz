import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { CartWidget } from './CartWidget/CartWidget'

export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#inicio">Cereal Paz</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#inicio">Inicio</Nav.Link>
                            <Nav.Link href="#productos">Productos</Nav.Link>
                            <Nav.Link href="#promociones">Promociones</Nav.Link>
                            <Nav.Link href="#Contacto">Contacto</Nav.Link>
                        </Nav>
                        <CartWidget/>
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    )
}
