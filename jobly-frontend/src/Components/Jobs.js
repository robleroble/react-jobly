import React, { useState, useEffect } from "react";
import JoblyApi from "../JoblyApi";
import LoaderSpinner from "./LoaderSpinner";
import { Container, Row } from "reactstrap";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";

const Jobs = () => {
  const [jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function getJobsOnMount() {
    searchJobs();
  }, []);

  async function searchJobs(title) {
    let jobs = await JoblyApi.getAllJobs(title);
    setJobs(jobs);
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <SearchBar searchFor={searchJobs} />
        {jobs.map((job) => (
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
  );
};

export default Jobs;
