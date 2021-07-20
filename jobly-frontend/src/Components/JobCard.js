import React from "react";
import { Col, Card, CardTitle, CardText } from "reactstrap";

const JobCard = ({id, title, salary, equity}) => {


    return (
        <Col className="mt-3" md="10">
            <Card className="shadow p-3 bg-body rounded" body>
                <CardTitle className="h4 fw-bolder">{title}</CardTitle>
                <CardText className="h6 text-muted">Salary: ${salary}</CardText>
                <CardText className="h6 text-muted">Equity: {equity}</CardText>
            </Card>
        </Col>
    )
}

export default JobCard;