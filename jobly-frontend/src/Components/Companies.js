import React, {useState, useEffect} from "react"
import JoblyApi from '../JoblyApi'
import CompanyCard from "./CompanyCard"
import LoaderSpinner from './LoaderSpinner'
import SearchBar from "./SearchBar"
import {Container, Row } from "reactstrap"

const Companies = () => {

    const [companies, setCompanies] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        async function getAllCompanies() {
            let companies = await JoblyApi.getAllCompanies();
            setCompanies(companies);
            setIsLoading(false);
        }
        getAllCompanies();
    }, [])

    if (isLoading) {
        return <LoaderSpinner />
    }
    return (
        <Container className="mt-3">
            <Row className="justify-content-md-center">
            <SearchBar />
            {companies.map(company => (
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
    )
}

export default Companies;