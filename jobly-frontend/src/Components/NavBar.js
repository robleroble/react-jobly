import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {Navbar, Nav, NavbarBrand, NavItem, Collapse, NavbarToggler, NavLink as RSNavLink} from "reactstrap";
import "../Stylings/NavBar.css"

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <Navbar className="ml-5"color="dark" dark expand="md">
            <NavbarBrand className="ms-4">
                <NavLink className="nav-link" to="/">Jobly</NavLink>
            </NavbarBrand>

            <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto me-4" navbar>
                        <NavItem>
                            <RSNavLink>
                                <NavLink className="nav-link" to="/companies">Companies</NavLink>
                            </RSNavLink>
                        </NavItem>
                        <NavItem>
                            <RSNavLink >
                                <NavLink className="nav-link" to="/jobs">Jobs</NavLink>
                            </RSNavLink>
                        </NavItem>
                        <NavItem>
                            <RSNavLink>
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </RSNavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
    )
}

export default NavBar;