import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "./Alert";
import {
  Card,
  Row,
  Col,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const Signup = ({ register }) => {
  const history = useHistory();
  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // Need to call API to login
    let result = await register(formData);
    if (result.registeredUser) {
      history.push("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }

  return (
    <Row className="justify-content-md-center">
      <Col md="6">
        <Card className="mt-5">
          <CardBody>
            <CardTitle className="font-weight-bold">
              <h2>Sign Up</h2>
            </CardTitle>
            <CardText>
              <Form onSubmit={handleSubmit}>
                <FormGroup className="mt-3">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>

                {formErrors.length ? (
                  <Alert type="danger" messages={formErrors} />
                ) : null}

                <Button className="btn-block mt-3">Sign Up!</Button>
              </Form>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Signup;
