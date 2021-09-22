import React, { useState, useEffect } from "react";
import JoblyApi from "../JoblyApi";
import CompanyCard from "./CompanyCard";
import LoaderSpinner from "./LoaderSpinner";
import SearchBar from "./SearchBar";
import { Container, Row } from "reactstrap";

const Companies = () => {
  const [companies, setCompanies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function getCompaniesOnMount() {
    searchCompanies();
  }, []);

  async function searchCompanies(search) {
    let companies = await JoblyApi.getAllCompanies(search);
    setCompanies(companies);
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoaderSpinner />;
  }
  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <SearchBar searchFor={searchCompanies} />
        {companies.map((company) => (
          <CompanyCard
            name={company.name}
            handle={company.handle}
            numEmployees={company.numEmployees}
            description={company.description}
            key={company.handle}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Companies;
