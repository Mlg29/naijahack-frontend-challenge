import React from "react"
import { Navbar, Nav,} from "react-bootstrap"

const Navigation = () => {
    return (
        <div className="container">
        <Navbar bg="light" expand="lg" className="nav-bg">
          <Navbar.Brand href="/">Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/" className="nav-item">Exercise</Nav.Link>
                  <Nav.Link href="/create" className="nav-item" >Create Exercise</Nav.Link>
                    <Nav.Link href="/user" className="nav-item" >Create User</Nav.Link>
                  </Nav>
                          
          </Navbar.Collapse>
    </Navbar>
  </div>  
    )
}

export default Navigation