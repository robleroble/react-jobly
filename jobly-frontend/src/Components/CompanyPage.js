import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import JoblyApi from '../JoblyApi'
import JobCard from "./JobCard"

const CompanyPage = () => {

    const { id } = useParams();

    const [company, setCompany] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // const [jobs, setJobs] = useState([])

    async function getCompany() {
        let company = await JoblyApi.getCompany(id);
        setCompany(company);
        console.log(company)
        setIsLoading(false);
        // let jobs = company.jobs;
        // setJobs(jobs)
    }


    useEffect(()=> {
        getCompany();
    }, [id]);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
      }

    return (
        <div>
            <div>
                <h2>{company.name}</h2>
                <h2 className="text-muted">{company.numEmployees} Employees</h2>
                <h3>{company.description}</h3>
            </div>
            <div>
                {/* {jobs.map(job => (
                    <JobCard 
                        id={job.id}
                        title={job.title}
                        salary={job.salary}
                        equity={job.equity} 
                    />
                ))} */}
            </div>
        </div>
    )
}

export default CompanyPage;