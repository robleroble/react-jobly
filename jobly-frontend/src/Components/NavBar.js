import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, Collapse, NavbarToggler } from "reactstrap";
import "../Stylings/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loggedIn = false;

  const toggle = () => setIsOpen(!isOpen);

  const loggedInNav = (
    <>
      <NavItem>
        <NavLink className="nav-link" to="/companies">
          Companies
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/jobs">
          Jobs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/profile">
          Profile
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/logout">
          Log out [username]
        </NavLink>
      </NavItem>
    </>
  );

  const loggedOutNav = (
    <>
      <NavItem>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
      </NavItem>
    </>
  );

  return (
    <Navbar className="ml-5" color="dark" dark expand="md">
      <NavLink className="ms-4 navbar-brand nav-link" to="/">
        Jobly
      </NavLink>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto me-5" navbar>
          {loggedIn ? loggedInNav : loggedOutNav}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
