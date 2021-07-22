import React, {useState, useEffect} from "react"
import JoblyApi from "../JoblyApi";
import LoaderSpinner from "./LoaderSpinner"
import {Container, Row } from "reactstrap"
import JobCard from "./JobCard";
import SearchBar from "./SearchBar"

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
            <SearchBar />
            {jobs.map(job => (
                <JobCard
                    id={job.id}
                    key={job.id}
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