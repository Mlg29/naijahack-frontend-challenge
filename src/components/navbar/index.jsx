import React from 'react';
import { Navbar, Nav,} from "react-bootstrap"
import "./navbar.css"



function NavBar(props) {

    return (
        <div className="container">
             <Navbar bg="transparent" expand="lg" className="nav-bg">
               <Navbar.Brand href="/"><img src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1585944590/twbvfaqkwvfe7ozc4h7o.png" alt="" /></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/" className="navigation-link1">For Recruiters</Nav.Link>
                    <Nav.Link href="/" className="navigation-link2">For Hackers</Nav.Link>               
                    </Nav>
                            
            </Navbar.Collapse>
      </Navbar>
        </div>
    )
}


export default NavBar;