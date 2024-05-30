import React from "react";

import './index.css';

export default function Textcomponent({title,subtitle, body, dates}) {
    return (
        <>
        <div className="d-flex mt-4">
            <div>
                <h3 className="titleHeading"> {title} </h3>
                <h6 className="subTitle"> {subtitle} </h6>
                <p className="textDes"> 
                        {body}
                </p>
            </div>
            <div className="ms-auto">
                <h6 className="textDate pl-1">{dates}</h6>
            </div>
        </div>
        </>
    )

}