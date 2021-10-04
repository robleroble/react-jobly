import React, { useContext } from "react";
import {
  Container,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  NavLink,
} from "reactstrap";
import "../Stylings/Home.css";
import UserContext from "./UserContext";

const Home = () => {
  const { currentUser } = useContext(UserContext);

  function loggedInHome() {
    return (
      <>
        <CardText className="my-2">
          Welcome back, {currentUser.username}
        </CardText>
      </>
    );
  }

  function loggedOutHome() {
    return (
      <>
        <div className="d-flex my-2">
          <NavLink>
            <Button>Login</Button>
          </NavLink>
          <NavLink>
            <Button>Sign up</Button>
          </NavLink>
        </div>
      </>
    );
  }

  return (
    <div className="home-body d-flex align-items-center">
      <Container className="d-flex flex-column align-items-center mb-5">
        <CardTitle className="h2 fw-bolder my-2">Jobly</CardTitle>
        <CardSubtitle className="h5 my-2">
          All the jobs in one, convenient place.
        </CardSubtitle>
        {currentUser ? loggedInHome() : loggedOutHome()}
      </Container>
    </div>
  );
};

export default Home;
