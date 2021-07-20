import React from "react"
import JobCard from "./JobCard"
import {Row} from 'reactstrap'

const JobsList = ({jobs}) => {

 return (
     <Row className="justify-content-md-center mb-5 mt-4">
         {jobs.map(job => (
             <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
            />
         ))}
     </Row>
 )   
}

export default JobsList;