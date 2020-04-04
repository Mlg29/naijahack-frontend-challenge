import React from "react"
import "./how-it-work.css"

const HowItWork = (props) => {
    return (
        <div className="how-it-work">
            <h1 className="hiw-header">{props.header}</h1>
            <img className="hiw-image" src={props.image} alt="" />
            <p className="hiw-paragraph">{props.paragraph}</p>
        </div>
    )
}

export default HowItWork