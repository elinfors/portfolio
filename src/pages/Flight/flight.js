import React, {useState, useEffect} from 'react'
import "./flight.css"
import '../projectStyle.css'
import history from '../../history'
import { useHistory } from "react-router-dom";

import Footer from "../Footer/footer"
var flight = require('./FlightBanner1.png')

const Flight = () =>{
    let history = useHistory();

    const RedirectBack = () =>{

        history.push("/");
        console.log("clicked")
      }
      const RedirectKollin = () =>{

        history.push("/kollin");
        console.log("clicked")
      }
      const RedirectTripdoodler = () =>{

        history.push("/tripdoodler");
        console.log("clicked")
      }

      

      return(
        <React.Fragment>
            <div className="menu sticky back">
                {/*<img onClick={() => RedirectBack()} className="back_arrow"src={arrow}></img>*/}
                <button onClick={() => RedirectBack()}  className="back_button">BACK</button>
            </div> 
            <div className="page">

                <div className="box6">
                    <div className="headlineBox">
                        <i class="fas fa-chevron-left" onClick={()=>{RedirectKollin()}}></i>
                        <div className="headline">
                        Flight
                        </div>
                        <i class="fas fa-chevron-right" onClick={()=>{RedirectTripdoodler()}}></i>
                    </div>
                        <div className="words">
                            <div>
                                Web Development
                            </div>
                            <div>
                            |
                            </div>
                            <div>
                                Visualization
                            </div>
                            <div>
                            |
                            </div>
                            <div>
                                Data Processing
                            </div>

                        </div>
                       
                </div>
                
                <div className="projectContent">

                    <div className="mediaDiv">
                        <img className="solutionImg"src={flight}></img>


                    </div>
                    <div className="descriptionDiv">
                        <div className="infoIcons">
                                <div className="infoDivHead">
                                        <p style={{fontSize:'15px'}}>DATA VISUALIZATION</p>
                                        <p className="projectName">Flight</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-user-tag"></i>
                                        <p>Designer</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-users"></i>
                                        <p>3</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-wrench"></i>
                                        <p></p>
                                    </div>
                        </div>

                        <div className="projectDesc">
                            Project Description
                        </div>
                        <div className="projectDesc">
                            Problem
                        </div>
                        <div className="projectText">
                            <ul>
                    <li> Students found it difficult to find information about the course offerings at KTH.</li>
                        <li>Once found, the course information was solely presented through text and a full understanding of course content and structure was restricted.
                    </li>
                    <li> Students found it difficult to get an overview of their education. 
                    </li>
                        </ul>
                        </div>
                        <div className="projectDesc">
                            Solution
                        </div>
                        <div className="projectText">

                        The design and development of an interactive visualization tool for customization and personalization of KTH students’ educational paths
                        </div>
                        <div className="projectDesc">
                            Design Process
                        </div>
                        <div className="projectText">

                        The design and development of an interactive visualization tool for customization and personalization of KTH students’ educational paths
                        </div>
                </div>
                </div>



           
            
            </div>
            <div className="row">
              <Footer/>
            </div>
           
        </React.Fragment>
    )

}
    export default Flight;

    {/*In the pursuit of an engineering degree at KTH, the possibility for students to get an overview of their education, to find suitable elective courses and to customize their education to their interests is limited. 
                In other words, there is a need for an improved tool to replace the deficient course search functionality on the current KTH website.

               In collaboration with researchers in the division of Media Technology and Interaction Design, another KTH student and I decided to carry out a project to design and develop a tool for educational overview and easy course search. */}
