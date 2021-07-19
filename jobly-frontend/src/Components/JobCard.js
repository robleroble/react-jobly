import React from "react";

const JobCard = (id, title, salary, equity) => {

    return (
        <div>
            <h4>{title}</h4>
            <h4>{salary}</h4>
            <h4>{equity}</h4>
        </div>
    )
}

export default JobCard;