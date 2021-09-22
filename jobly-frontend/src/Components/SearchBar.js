import React, { useState } from "react";
import { Col, Form, Input, Button } from "reactstrap";

const SearchBar = ({ searchFor }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchFor(searchTerm);
    setSearchTerm("");
  };

  return (
    <Col className="mt-3" md="10">
      <Form className="input-group" onSubmit={handleSubmit}>
        {/* <Label htmlFor="search">Search</Label> */}
        <Input
          type="text"
          name="searchTerm"
          id="search"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button className="btn-block">Search!</Button>
      </Form>
    </Col>
  );
};

export default SearchBar;
