import React from "react"
import {NavLink} from "react-router-dom"
import { Col, Card, CardTitle, CardText } from "reactstrap";
import "../Stylings/CompanyCard.css"

const CompanyCard = ({name, handle, numEmployees, description, navLinkEnabled}) => {

    return (
        <Col className="mt-3" md="10">
            <NavLink className="CompanyCard-navlink" to={`/companies/${handle}`}>
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