import React, {useState} from "react"
import { Col, Form, Input, Button } from "reactstrap";

const SearchBar = () => {

    const INITIAL_STATE ={ search: ''}

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setFormData(INITIAL_STATE)
    // }

    return (
        <Col className="mt-3" md="10">
            <Form className="input-group">
                {/* <Label htmlFor="search">Search</Label> */}
                <Input 
                    type="text" 
                    name="search" 
                    id="search" 
                    value={formData.search} 
                    onChange={handleChange} 
                />
                <Button className="btn-block">Search!</Button>
            </Form>
        </Col>
    )
}

export default SearchBar;