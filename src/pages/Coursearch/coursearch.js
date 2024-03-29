import React, {useState, useEffect, useRef} from 'react'
import "./coursearch.css"
import "../projectStyle.css"
import history from '../../history'
import { useHistory } from "react-router-dom";
import ScrollArrow from '../ScrollArrow'
import arrow from "./back_arrow.png"
import q from "./q.png"
import discovery from "./discovery.png"
import Footer from "../Footer/footer"
import coursearch1 from "./coursearch1.png"
import pdf from './KTH Coursearch Project Report .pdf'

var course = require('./CourseSolution2.png')
var logo = require('../HomePage/EFlogoWhite.png')
var process = require('./CourseProcess.png')
var survey = require('./Survey.png')
var requirements = require('./Requirements.png')
var skecthing = require('./Sketching.png')
var hiw = require('./HIW.png')
//var video = require('../../CoursearchDemo.mp4')

const Coursearch = () =>{
    const scrollToRef = (ref) => window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'     
    })   
    
      
        const descRef = useRef(null)
        const executeScroll = () => {scrollToRef(descRef)}
    let history = useHistory();

    const RedirectBack = () =>{

        history.push("/");
        console.log("clicked")
      }
      const RedirectCourse = () =>{

        history.push("/coursearch");
        console.log("clicked")
      }

      const RedirectTripDoodler = () =>{

        history.push("/tripdoodler");
        console.log("clicked")
      }
      const RedirectNearby = () =>{

        history.push("/nearby");
        console.log("clicked")
      }
      const RedirectKollin = () =>{

        history.push("/kollin");
        console.log("clicked")
      }
      const RedirectFlight = () =>{

        history.push("/flight");
        console.log("clicked")
      }
      const RedirectIkea = () =>{

        history.push("/ikea");
        console.log("clicked")
      }
      
      return(
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'rgb(22 22 22)', height:'5%'}}>
          <a class="navbar-brand" onClick={()=> RedirectBack()}><img src={logo} style={{height:'40px'}}></img></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectBack()} style={{color:'#ffffff'}}>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectTripDoodler()} style={{color:'#ffffff'}}>Tripdoodler</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectCourse()} style={{color:'#ffffff'}}>Coursearch</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectNearby()} style={{color:'#ffffff'}}>NearBy</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectKollin()} style={{color:'#ffffff'}}>Kollin</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectFlight()} style={{color:'#ffffff'}}>KTH Flight Tool</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=> RedirectIkea()} style={{color:'#ffffff'}}>Ikea Assembly</a>
              </li>
            </ul>
          </div>
        </nav>
            <div className="page">

                <div className="box4">
                    <div className="headlineBox">
                    <div className="arrowDiv">
                        <i className="fas fa-chevron-left" onClick={()=>{RedirectTripDoodler()}}></i>
                        <p>Previous project</p>
                        </div>
                        <div className="headline">
                        Coursearch
                        </div>
                        <div className="arrowDiv">
                        <i className="fas fa-chevron-right" onClick={()=>{RedirectNearby()}}></i>
                        <p>Next project</p>
                        </div>
                    </div>
                        <div className="words">
                            <div>
                                Visualizing KTH course data for supporting students at KTH to self-manage their educational path
                            </div>
                        </div>
                        
                        <div className="arrowDown">

                            <i onClick={()=>{executeScroll()}} class="fas fa-chevron-down"></i>

                            </div>
                       
                </div>
                
                <div className="projectContent">

                    <div className="descriptionDiv" ref={descRef}>
                        <div className="infoIcons">
                                <div className="infoDivHead">
                                        <p style={{fontSize:'15px'}}>DATA VISUALIZATION</p>
                                        <p className="projectName">Coursearch</p>
                                    </div>
                                    <div className="infoDivButtons">
                                        <a href="https://coursearch-d578e.web.app/" target="_blank">
                                            <button className="projectButton">COURSEARCH TOOL</button>
                                        </a>
                                        <a href="https://github.com/elinfors/courseProject" target="_blank">
                                            <button className="projectButton">GITHUB REPOSITORY</button>
                                        </a>
                                        <form className="downloadForm" method="get" action={pdf}  target="_blank">
                                                <button className="projectButtonDownload" type="submit">PROJECT REPORT
                                                <i id="downloadIcon" className="fas fa-arrow-circle-down"></i>
                                                </button>
                                        </form>

                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-user-tag"></i>
                                        <p>Designer and developer</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-users"></i>
                                        <p>2</p>
                                    </div>
                                    <div className="infoDiv">
                                        <i class="fas fa-wrench"></i>
                                        <p>Figma, React.js, D3.js, Github, Kopps API</p>
                                    </div>
                                    <div className="infoDiv">
                                        <p>This project was conducted as an individual course at KTH with the goal of helping students at KTH plan and customize their educational path.
                                        </p>
                                    </div>
                        </div>

                        <div className="projectDesc">
                            Project Description
                        </div>
                        <div className="projectText">
                            Together with another master student, a web application
                           for course search and the possibility of creating a personalized education 
                            overview was designed and developed, using interactive visualizations.
                            The application was developed using React.js and D3.js and resulted in two main features - a course search visualization 
                            with filtering options and a study plan for customizing the students’ educational path.
                        </div>
                        <div className="projectDesc">
                            Problem
                        </div>
                        <div className="projectText">
                            <ul>
                    <li> Students found it difficult to find information about the course offerings at KTH</li>
                        <li>Once found, the course information was solely presented through text and a full understanding of course content and structure was restricted
                    </li>
                    <li>The course search had insufficient filtering options</li>
                    <li> Students found it difficult to get an overview of their education
                    </li>
                        </ul>
                        </div>

                        <div className="projectDesc">
                            Design Process
                        </div>
                        
                        <img className="processImg" src={process}></img>
                        <div className="projectText">
                        The design phase was initiated with a literature review and a pre-study survey in order to gain knowledge about 
                        the problem and of what tools that could be used to solve it. The literature review was conducted in order to find a solid ground for all the design choices and visual structures. 
                        Based on the data from the API, we gained insights about which visual structures to use for the purpose of the project.
                        
                    
                        </div>
                        <div>
                            We wanted to know what students thought about the current course search functionality, in order to find pain points for the design.
                            To get many answers as quick as possible, we sent out a survey. The result from the survey showed that:
                            <img className="processImg" src={survey}></img>

                            This lead to three main requirements:

                            <img className="processImg" src={requirements}></img>
                        </div>
                        <div className="projectText">
                        When all data from the pre-study was collected and analyzed, we had a brainstorming session to 
                        figure out the best way to solve the issues that arose in the pre-study. The “best way” was based on 
                        previous research in the field of information visualization and the brainstorming was in the form of concept sketching with the purpose of generating a lot of ideas. 
                        The design was then created in Figma and was based on the answers from the survey, 
                        the insights from related work, visualization theory and the sketches made during brainstorming.
                        <img className="processImg" src={skecthing}></img>
                        </div>
                        <div className="projectText">
                            Based on the design we developed an MVP using React.js and D3.js, which was tested on users to gain insights about where to show what information and how to access it. 
                            The user tests were in the form of think-aloud tests combined with unstructured interviews, asking questions such as
                            <ul>
                                <li>What information do you expect to get when clicking on X?</li>
                                <li>What information do you want to get when clicking on X?</li>
                                <li>Why?</li>

                            </ul>
                        </div>
                        <div className="projectText">
                        Interaction improvements in the visualizations were made and a step-by-step tutorial was created to support onboarding.  
                        <img className="processImg" src={hiw}></img>
                        </div>

                        


                        <div className="projectDesc">
                            Solution
                        <img className="processImg" src={course}></img>
                        </div>
                        <div className="projectText">
                        To address the problem of finding information about KTH course offerings and suitable courses, an interactive bubble chart was created. 
                        The bubble chart has different levels of information, where courses from each department and school are grouped together. Through the filtering
                        functionality, students can search for courses based on several requirements such as level, language, campus, period, as well as by free text.
                        </div>
                        <div className="projectText">
                        The visualization of courses lets the students explore all courses at KTH, not only the ones bound to a certain school and/or department. 
                        This way, students can find elective courses that they are interested in, and that complement and/or fit their programme. 
                        A more customized education is thus easier to achieve, where students get to be involved in their learning process. 
                        </div>
                        <div className="projectText">
                        To enable an overview of a student's education, a study plan visualization was created. Here, the students can add their bachelor courses automatically
                        and their master courses manually using the search funtionality. The students gets the opportunity to explore the composition of courses and subjects
                        and see if the education is going in the direction of their wishes. 
                        </div>

                </div>
                </div>



           
            
            </div>
            <div className="ScrollContainer">
                <ScrollArrow/>
                </div>
            <div className="row">
              <Footer/>
            </div>
           
        </React.Fragment>
    )

}
    export default Coursearch;

    {/*In the pursuit of an engineering degree at KTH, the possibility for students to get an overview of their education, to find suitable elective courses and to customize their education to their interests is limited. 
                In other words, there is a need for an improved tool to replace the deficient course search functionality on the current KTH website.

               In collaboration with researchers in the division of Media Technology and Interaction Design, another KTH student and I decided to carry out a project to design and develop a tool for educational overview and easy course search. */}
