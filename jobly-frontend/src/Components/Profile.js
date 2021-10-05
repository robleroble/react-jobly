import React, {useContext, useState} from "react"
import {useHistory} from "react-router-dom"
import UserContext from "./UserContext"
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
  import JoblyApi from "../JoblyApi"

const Profile = () => {
    const history = useHistory();
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const USER_INFO = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        password: ""
    }

    const [formData, setFormData] = useState(USER_INFO);
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
        // call API to update userInfo
        let updatedUser;
        try {
            updatedUser = await JoblyApi.updateUser(currentUser.username, formData);
        } catch(err) {
            setFormErrors(err);
            return;
        }
        
        // from returnedUser, need to update currentUser
        setCurrentUser(updatedUser)
        // redirect to home page
        history.push("/")

      }
    
      

      return (
        <Row className="justify-content-md-center">
          <Col md="6">
            <Card className="mt-5">
              <CardBody>
                <CardTitle className="font-weight-bold">
                  <h2>Profile</h2>
                </CardTitle>
                <CardText>
                  <Form onSubmit={handleSubmit}>
                    <FormGroup className="mt-3">
                      <Label className="fw-bold" htmlFor="name">Username</Label>
                      <CardText>{currentUser.username}</CardText>
                    </FormGroup>
                    <FormGroup className="mt-3">
                      <Label className="fw-bold" htmlFor="firstName">First name</Label>
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mt-3">
                      <Label className="fw-bold" htmlFor="lastName">Last name</Label>
                      <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mt-3">
                      <Label className="fw-bold" htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup className="mt-3">
                      <Label className="fw-bold" htmlFor="password">Password</Label>
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
    
                    <Button className="btn-block mt-3">Update profile info!</Button>
                  </Form>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
}

export default Profile;