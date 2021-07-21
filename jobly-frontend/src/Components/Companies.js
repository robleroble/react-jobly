import React, {useState, useEffect} from "react"
import JoblyApi from '../JoblyApi'
import CompanyCard from "./CompanyCard"
import LoaderSpinner from './LoaderSpinner'
import {Container} from "reactstrap"

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
            <h2>Search Bar Goes Here</h2>
            {companies.map(company => (
                <CompanyCard
                    name={company.name}
                    handle={company.handle}
                    numEmployees={company.numEmployees}
                    description={company.description}
                    key={company.handle}
                />
            ))}
        </Container>
    )
}

export default Companies;