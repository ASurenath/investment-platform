import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo-black.png";

function Header({ navObj }) {
  return (
    <Navbar
      expand="md"
      className="bg-body-light header shadow-sm sticky-top"
      style={{ minHeight: "80px", backgroundColor: "white" }}
    >
      <Container fluid className="">
      <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className="ms-lg-4 ms-md-3 d-flex">
          <img className="logo-img" src={logo} alt="" />{" "}
  
            <h2 className="mt-2 ms-3">
            <b>
                {" "}
               <span> Capital<span className="head2">Clue</span></span>
            </b>
            </h2>
          </Navbar.Brand>
      </Link>
        <Navbar.Toggle className="me-3" />
        <Navbar.Collapse>
          <Nav className="mx-auto my-2 my-lg-0 text-end">
            {navObj?.map((i, index) => (
              <Link to={i.link} style={{ textDecoration: "none" }} key={index}>
                <h6
                  className={
                    i.active
                      ? "me-lg-5 me-3 active navlink"
                      : "me-lg-5 me-3 navlink"
                  }
                >
                  {i.text}
                </h6>
              </Link>
            ))}
          </Nav>
          <Nav>
            <Button
              variant="dark rounded-5 me-lg-5 me-md-3 ms-auto"
              style={{ width: "fit-content", marginLeft: "auto" }}
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
