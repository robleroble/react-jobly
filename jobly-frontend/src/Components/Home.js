import React from "react";
import {
  Container,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import "../Stylings/Home.css";

const Home = () => {
  const loggedIn = true;

  const loggedInHome = (
    <>
      <CardText className="my-2">Welcome back, [USER]</CardText>
    </>
  );

  const loggedOutHome = (
    <>
      <div className="my-2">
        <Button className="mx-3">Login</Button>
        <Button className="mx-3">Sign up</Button>
      </div>
    </>
  );

  return (
    <div className="home-body d-flex align-items-center">
      <Container className="d-flex flex-column align-items-center mb-5">
        <CardTitle className="h2 fw-bolder my-2">Jobly</CardTitle>
        <CardSubtitle className="h5 my-2">
          All the jobs in one, convenient place.
        </CardSubtitle>
        {loggedIn ? loggedInHome : loggedOutHome}
      </Container>
    </div>
  );
};

export default Home;
