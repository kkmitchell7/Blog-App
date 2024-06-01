import React, {useRef} from "react";

import './index.css';

import scrollTo from "../Mainpage";

export default function Sidebar() {


    
    return (
            <div>
                
                <img src={`${process.env.PUBLIC_URL}/kailen.jpg`} alt="Headshot of Kailen" className="headshot "/>

                <div className="sidebarDiv">
                    <a href="#about" className="sideBarLink" onClick={null}>About</a>
                </div>
                <div className="sidebarDiv">
                    <a href="#projects" className="sideBarLink">Projects</a>
                </div>
                <div className="sidebarDiv">
                    <a href="#experience" className="sideBarLink">Experience</a>
                </div>
                <div className="sidebarDiv">
                    <a href="#education" className="sideBarLink">Education</a>
                </div>
                <div className="sidebarDiv">
                    <a href="#skills" className="sideBarLink">Skills</a>
                </div>
                <div className="sidebarDiv">
                    <a href="#interests" className="sideBarLink">Interests</a>
                </div>
          

            </div>
    );
  }