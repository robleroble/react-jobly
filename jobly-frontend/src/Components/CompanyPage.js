import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import JoblyApi from '../JoblyApi'
import JobsList from "./JobsList"
import LoaderSpinner from './LoaderSpinner'
import {Container, Row, Col, Card, CardTitle, CardText} from "reactstrap"

const CompanyPage = () => {

    const { id } = useParams();

    const [company, setCompany] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        async function getCompany() {
            let company = await JoblyApi.getCompany(id);
            setCompany(company);
            setIsLoading(false);
        }
        getCompany();
    }, [id]);

    if (isLoading) {
        return <LoaderSpinner />;
      }

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                {/* <CompanyCard
                    name={company.name}
                    handle={company.handle}
                    numEmployees={company.numEmployees}
                    description={company.description}
                /> */}
                <Col md="10">
                    <Card body>
                    <CardTitle className="h4 fw-bolder">{company.name}</CardTitle>
                    <CardText className="h6 text-muted">{company.numEmployees} Employees</CardText>
                    <CardText className="">{company.description}</CardText>
                    </Card>
                </Col>
            </Row>
                <JobsList jobs={company.jobs} />
               
        </Container>
    )
}

export default CompanyPage;