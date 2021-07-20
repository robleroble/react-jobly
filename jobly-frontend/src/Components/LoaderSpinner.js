import React from "react"
import Loader from "react-loader-spinner"
import "../Stylings/LoaderSpinner.css"

const LoaderSpinner = () => {

    return (
        <div className="Loader">
            <h2 className="Loader-title">LOADING</h2>
            <Loader 
                type="Puff"
                color="#00BFFF"
                height={150}
                width={150}
                timeout={3000} 
            />
        </div>
    )

}

export default LoaderSpinner;