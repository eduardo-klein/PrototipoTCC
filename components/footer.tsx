import { Container, Row, Nav, NavLink, Col } from "react-bootstrap";
import React from "react";


const footer = () =>{
    return(
    <footer className="py-5">
        <Container fluid className="d-flex bg-dark py-2 mx-auto" style={{position:'absolute'}}>

            <Row className="d-flex mx-auto">
                <Nav>
                    <NavLink href="/" className="text-white mx-3">Home</NavLink>
                    <NavLink href="/entenda" className="text-white mx-3">Entenda</NavLink>
                    <NavLink href="/info" className="text-white mx-3">Info</NavLink>
                </Nav>
            </Row>
            

        </Container>

    </footer>
    )
}

export default footer;