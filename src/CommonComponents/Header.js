import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
    const headerLinks = [{ link: '/', text: 'Home',active:false}, { link: '/', text: 'Link1',active:true }, { link: '/', text: 'Link2',active:false }]
    return (
        <Navbar expand="md" className="bg-body-light header shadow-sm sticky-top" style={{ minHeight: '80px' ,backgroundColor:'white'}}>
            <Container fluid className=''>
                <Navbar.Brand href="#" className='ms-lg-4 ms-md-3'><h2>Logo</h2></Navbar.Brand>
                <Navbar.Toggle className='me-3'/>
                <Navbar.Collapse >
                    <Nav
                        className="mx-auto my-2 my-lg-0 text-end"
                    >
                        {headerLinks?.map((i,index) => <Link to={i.link} style={{ textDecoration: 'none' }} key={index}><h6 className={i.active?'me-lg-5 me-3 active navlink':'me-lg-5 me-3 navlink'}>{i.text}</h6></Link>)}
                    </Nav>
<Nav>
                            <Button variant='dark rounded-5 me-lg-5 me-md-3 ms-auto' style={{width:'fit-content',marginLeft:'auto'}}>Logout</Button>
    
</Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header