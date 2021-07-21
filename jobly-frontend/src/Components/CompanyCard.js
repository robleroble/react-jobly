import React from "react"
import {NavLink} from "react-router-dom"
import { Col, Card, CardTitle, CardText } from "reactstrap";
import "../Stylings/CompanyCard.css"

const CompanyCard = ({name, handle, numEmployees, description}) => {

    return (
        <Col className="mt-3 justify-content-md-center">
            <NavLink to={`/companies/${handle}`}>
            <Card className="shadow p-3 bg-body rounded">
                <CardTitle className="h4 fw-bolder">{name}</CardTitle>
                <CardText className="h6">{description}
                </CardText>
            </Card>
            </NavLink>
        </Col>
    )
}

export default CompanyCard;