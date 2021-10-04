import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, Collapse, NavbarToggler } from "reactstrap";
import UserContext from "./UserContext";
import "../Stylings/NavBar.css";

const NavBar = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(UserContext);

  const toggle = () => setIsOpen(!isOpen);

  // needs to be a func for some reason because currentUser won't work in a variable...
  function loggedInNav() {
    return (
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
          <NavLink className="nav-link" to="/" onClick={logout}>
            Log out {currentUser.username}
          </NavLink>
        </NavItem>
      </>
    );
  }

  function loggedOutNav() {
    return (
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
  }

  return (
    <Navbar className="ml-5" color="dark" dark expand="md">
      <NavLink className="ms-4 navbar-brand nav-link" to="/">
        Jobly
      </NavLink>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto me-5" navbar>
          {currentUser ? loggedInNav() : loggedOutNav()}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
