import React from "react";

import Textcomponent from "../Textcomponent";

import './index.css';

export default function Mainpage() {
    return (
        <>
        <div>
            <article id="about">
                <div className="d-flex">
                    <h1 className="mainHeading m-0">Kailen</h1>
                    <h1 className="mainHeading iconColor m-0"> Mitchell</h1>
                </div>
                <div className="d-flex">
                    <p className="pt-0 pb-0 p-1 greyText">415-971-0196 ·</p>
                    <p className="pt-0 pb-0 p-1 greyText">kailen53.mitchell@gmail.com ·</p>
                    <p className="pt-0 pb-0 p-1 greyText">San Francisco, CA </p>
                </div>
                <p className="mt-2">Hi! I'm Kailen and I'm a student with skills in full stack development. I'm a problem solver at heart who loves designing and creating. 
                I believe whole-heartedly that challenges are the fuel that drive learning and innovation. </p>

                

                    <div className="d-flex pt-5">
                        <a href="https://github.com/kkmitchell7" target="_blank" className="iconColor">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" style={{marginTop:"20vh"}}>
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/kailen-mitchell-323518227/" target="_blank" className="iconColor">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" style={{marginTop:"20vh", marginLeft:"40"}}>
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </a>
                    </div>
                

            </article>
            <article id="projects">
                <h1 className="headings"> Projects </h1>
                <Textcomponent 
                    title="Donation Full Stack Web Page" 
                    subtitle="React, Node.js, Express.js"
                    body="On a team of interns, designed and built a donation page, including the database and frontend."
                    dates="May 2024 - June 2024"
                />
                <Textcomponent 
                    title="Blog App" 
                    subtitle="React, Node.js, Express.js, MongoDB"
                    body="Built a full stack blog app..."
                    dates="May 2024 - June 2024"
                />
                <Textcomponent 
                    title="Vacation House Booking App" 
                    subtitle="Django, python"
                    body="Built a full stack booking website application..."
                    dates="Feb 2024 - July 2024"
                />
            </article>
            
            <article id="experience">
                <h1 className="headings"> Experience </h1>
                <Textcomponent 
                    title="Software Engineering Intern" 
                    subtitle="Soapbox SA | Cape Town, SA"
                    body="stuff here"
                    dates="May 2024 - Jun 2024"
                />
                <Textcomponent 
                    title="Data Research Intern" 
                    subtitle="Connolly Alexander Institute for Data Science | New Orleans, LA"
                    body="stuff here"
                    dates="Aug 2023 - May 2025"
                />
                <Textcomponent 
                    title="IT Intern" 
                    subtitle="Newcomb Insitute | New Orleans, LA"
                    body="stuff here"
                    dates="Sep 2021 - Sep 2023"
                />
            </article>
            
            <article id="education">
                <h1 className="headings"> Education </h1>
                <Textcomponent 
                    title="B.S in Mathematics and Computer Science" 
                    subtitle="Tulane University | New Orleans, LA"
                    body="Courses:"
                    dates="2025"
                />
                <Textcomponent 
                    title="High School Dipolma" 
                    subtitle="The Bay School | San Francisco, CA"
                    body=""
                    dates="2021"
                />
            </article>
            
            <article id="skills"> 
                <h1 className="headings"> Skills </h1>
                <Textcomponent 
                    title="Programming Languages & Tools" 
                    subtitle=""
                    body=""
                    dates=""
                />
                put icons here!
                <Textcomponent 
                    title="Back End Frameworks, Database Technologies And Workflows" 
                    subtitle=""
                    body=""
                    dates=""
                />
                put icons here!
            </article>
            
            <article id="interests">
                <h1 className="headings"> Interests </h1>
                <Textcomponent 
                    title="" 
                    subtitle=""
                    body=""
                    dates=""
                />
                <p>When I'm not coding, I love reading, hiking, playing ultimate frisbee, and taking spin classes.</p>
                add some photos here?
            </article>
            </div>
            </>
    );
  }