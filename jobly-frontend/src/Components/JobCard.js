import React, {useContext, useState} from "react";
import { Button, Col, Card, CardTitle, CardText } from "reactstrap";
import UserContext from "./UserContext"
import JoblyApi from "../JoblyApi"

const JobCard = ({id, title, salary, equity}) => {
    const {currentUser, jobsApplied, setJobsApplied} = useContext(UserContext)
    const [applied, setApplied] = useState(jobsApplied.has(id));


    // need func that will add job id to setJobsApplied
    async function applyToJob() {
        let jobId = await JoblyApi.applyToJob(currentUser.username, id);
        setApplied(true)
        setJobsApplied(jobsApplied.add(jobId))
    }

    let applyButton;

    if (applied) {
        applyButton =  <Button className="btn btn-danger">Applied!</Button>
    } else {
        applyButton = <Button onClick={applyToJob}>Apply!</Button>
    }


    function showApplied(){
        console.log(applied, id, jobsApplied)
    }

    


    return (
        <Col className="mt-3" md="10">
            <Card className="shadow p-3 bg-body rounded" body>
                <CardTitle onClick={showApplied} className="h4 fw-bolder">{title}</CardTitle>
                <CardText className="h6 text-muted">Salary: ${salary}</CardText>
                <CardText className="h6 text-muted">Equity: {equity}</CardText>
                {applyButton}
            </Card>
        </Col>
    )
}

export default JobCard;