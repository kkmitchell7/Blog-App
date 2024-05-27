import React from "react";

import './index.css';

export default function Textcomponent({title,subtitle, body, dates}) {
    return (
        <>
        <div className="d-flex mt-4">
            <div>
                <h3 className="titleHeading"> {title} </h3>
                <h6> {subtitle} </h6>
                <p className="textDes"> 
                        {body}
                </p>
            </div>
            <div>
                <h6 className="textDate">{dates}</h6>
            </div>
        </div>
        </>
    )

}