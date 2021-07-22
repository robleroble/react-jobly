import React, {useState, useEffect} from "react"
import JoblyApi from "../JoblyApi";
import LoaderSpinner from "./LoaderSpinner"
import {Container, Row, Col} from "reactstrap"
import JobCard from "./JobCard";

const Jobs = () => {

    const [jobs, setJobs] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        async function getAllJobs() {
            let jobs = await JoblyApi.getAllJobs();
            setJobs(jobs);
            setIsLoading(false)
        }
        getAllJobs();
    }, [])

    if (isLoading) {
        return <LoaderSpinner />
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
            <Col className="mt-3" md="10">
                <h2>Search Bar Goes Here</h2>
            </Col>
            {jobs.map(job => (
                <JobCard
                    id={job.id}
                    key={job.key}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                />
            ))}
            </Row>
        </Container>
    )
}

export default Jobs;