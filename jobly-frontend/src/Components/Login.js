import React, { useState } from "react";
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
import { useHistory } from "react-router-dom";
import Alert from "./Alert";

const Login = ({ login }) => {
  const history = useHistory();
  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    // Need to call API to login
    let result = await login(formData);
    if (result.loggedInUser) {
      console.log(result);
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
              <h2>Login</h2>
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
                {formErrors.length ? (
                  <Alert type="danger" messages={formErrors} />
                ) : null}
                <Button className="btn-block mt-3">Login!</Button>
              </Form>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
