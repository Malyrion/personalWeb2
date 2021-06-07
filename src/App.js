import "./App.css";
import SNavigation from "./components/SeboNavigation";
import MediaCard from "./components/Projects";
import { Button, TextField } from "@material-ui/core";
import WorkExp from "./components/WorkExp";
import Mail from "./components/Mail.js";
import GradientBtn from "./components/Button.js";
import ImageSlider from "./components/Slider.js";
import game from "./images/game.png";
import website from "./images/website.png";
import webdev from "./images/web-dev.svg";
import name__icons from "./images/name__icons.svg";
import prog from "./images/programming.svg";
import gamed from "./images/gave-dev.svg";
import covid_tracker from "./images/covid-tracker.JPG";
import arrowDown from "./images/ArrowDown.svg";
import webDevAvatar from "./images/web-dev-avatar.png";
import programAvatar from "./images/prog-avatar.png";
import teamWorkAvatar from "./images/teamwork-avatar.png";
import react from "./images/React.svg";
import unity from "./images/Unity.svg";
import python from "./images/Python.svg";
import { Breadcrumbs, Link } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Portfolio from "./components/Work";

import React, { Component, useState, useEffect } from "react";

function App() {
  // const [section, setSection] = useState({});
  //
  // //  ShowSection({section});{
  // //  if(section==1){
  // //    document.getElementById("section1").style.display = "block";
  // //  }  if(section==2){
  // //      document.getElementById("section2").style.display = "block";
  // //    }  if(section==3){
  // //        document.getElementById("section3").style.display = "block";
  // //      }
  // // }

  return (
    <div className="App">
      {/*navigarion bar*/}
      {/**/}

      <div className="app__background"></div>

      <div className="new__background">
        <SNavigation className="app__navigation" />
        {/*<div className="app__navigation">
        <ul>
            <li><a href="" class="left">Project</a></li>
            <li><a href="" class="left">Experience</a></li>
            <li><a href="" class="left">Contanct me</a></li>
            <li><a href="" class="left">LinkedIn</a></li>
            <li><a href="" class="left">Github</a></li>
        </ul>
      </div>*/}

        {/*Animation and my name section*/}
        <div className="app__name">
          <h1 className="app__roles">
            <span style={{ color: "orange" }}>M</span>AKSYM{" "}
            <span style={{ color: "orange" }}>M</span>ALYNOVSKYI
          </h1>
        </div>

        <div className="app__roles">
          <hr />
          <h2>
            Hey, Wellcome to my website. I am Maksym and currently I am a{" "}
            <span style={{ color: "orange" }}>
              Junior Web Developer at Epigeum, Oxford University Press
            </span>{" "}
            and at the same time I am a{" "}
            <span style={{ color: "orange" }}>
              Student at City University of London
            </span>
            . I take my passion in Full-Stack development, Big Data
            Visualisation and Game development to the next level. Open for
            opportunities big and small. On the side, I enjoy playing chess,
            electric guitar and skate. Hoping this description wasn't too
            generic. Do contact me and look at some of my work. Hope you have a
            great day!
          </h2>
        </div>
        <hr />
        <div className="app__button">
          <div className="app__header_buttons">
            <Link
              href="https://www.linkedin.com/in/maksym-malynovskyi-227541182/"
              target="_blank"
            >
              <button>
                {" "}
                <LinkedInIcon fontSize="small" /> <p>LinkedIn</p>
              </button>
            </Link>
            <br />
            <Link href="https://github.com/Malyrion" target="_blank">
              <button>
                <GitHubIcon fontSize="small" />
                <p>GitHub</p>
              </button>
            </Link>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </div>
      </div>

      {/*Section with new bg and core skills*/}
      {/*Animation with copmuter and code*/}
      <div className="app__bluebg">
        <div className="app__images">
          <div>
            <div className="app__iconTitle">
              <img className="app__imges_icon" src={react} alt="" />
              <a href="#section1">
                {" "}
                <h3>Modern PWA and websites</h3>
              </a>
            </div>

            <div id="section1">
              <p>
                {" "}
                I strive towards making Progressive Web Applicatios that appear
                to the user making it intuitive and easy to use. My Favorite
                framework is React js, withe the use of material-ui components
                to achive smooth 2D design. Usualy work with Firebase for the
                database and hosting but also familiar with the Heroku and AWS
                when working with backend. In parallel learning more about React
                Native and Electron js for mobile and desktop applications.{" "}
              </p>
            </div>
            <img src={webdev} alt="" />

            <p>React js</p>
            <div class="container">
              <div class="skills html">90%</div>
            </div>
            <p>Vue js</p>
            <div class="container">
              <div class="skills css">80%</div>
            </div>
            <p>Firebase</p>
            <div class="container">
              <div class="skills js">65%</div>
            </div>
            <p>Heroku/ AWS</p>
            <div class="container">
              <div class="skills php">60%</div>
            </div>
          </div>
          <div></div>

          <div>
            <div className="app__iconTitle">
              <div>
                <img className="app__imges_icon" src={python} alt="" />

                <a href="#item2">
                  <h3>Efficient programming</h3>
                </a>
              </div>
            </div>
            <div id="section1">
              <p>
                {" "}
                With a foundation in computer science, I'm passionate about
                learning new software and develop as a programmer. In the
                process I hope to become better in writing a clean and efficient
                code that can be used by others and commite in creating
                beautiful software. Favorite programming language is Python with
                second and third place going to Java and C++. Intrested in Data,
                AI and software solutions that can solve problems. Currently
                foculing on Models for Neural Networks and Object detection.{" "}
              </p>
            </div>
            <img src={prog} alt="" />
            <div>
              <p>Python</p>
              <div class="container">
                <div class="skills html">90%</div>
              </div>

              <p>Java</p>
              <div class="container">
                <div class="skills css">80%</div>
              </div>

              <p>JavaScript</p>
              <div class="container">
                <div class="skills js">65%</div>
              </div>

              <p>C++</p>
              <div class="container">
                <div class="skills php">60%</div>
              </div>
            </div>
          </div>
          <div>
            <div className="app__iconTitle">
              <img className="app__imges_icon" src={unity} alt="" />

              <a href="#item3">
                <h3>Entertaining games</h3>
              </a>
            </div>
            <div id="section1">
              <p>
                Having a passion for the video games since younger age I still
                find them facinating and exiting as the result I am working on
                game development with some of my friends. Hopping to have a
                fully released game one day or maybe a game-dev company who
                knows? Usualy working with Unity and Blender for trying
                different things. Have made few 2D game in my first year at
                University using BOX2D engine.{" "}
              </p>
            </div>
            <img src={gamed} alt="" />
            <div>
              <p>Unity</p>
              <div class="container">
                <div class="skills html">90%</div>
              </div>

              <p>Blender</p>
              <div class="container">
                <div class="skills css">80%</div>
              </div>

              <p>Adobe Package</p>
              <div class="container">
                <div class="skills js">65%</div>
              </div>

              <p>UE4</p>
              <div class="container">
                <div class="skills php">60%</div>
              </div>
            </div>
          </div>
        </div>
        {/*Icon and Button*/}
      </div>

      {/*Project and Skills preview*/}
      <div id="app__projectsandskills" className="app__projectsandskills">
        <div className="container mt-5 carousel">
          <h1>
            <span style={{ color: "orange" }}>P</span>ROJECTS
          </h1>
          <h2>
            This section covers some of my early and more recent work. This
            section will grow as the time goes by...
          </h2>
          <h3>
            This is a section with the project that I have done, to find more
            about each project and skills involved with it click the project
            button!
          </h3>

          <ImageSlider />
        </div>
        {/*  <div className="app__projects">

      <MediaCard href="https://google.com" p_name="Covid-Tracker" image={covid_tracker} p_discription="App that uses desiase.sh API to display current Covid cases in the world" ></MediaCard>
      <MediaCard p_name="E-shop Website" image={website} p_discription="Creation of an e-commerce website using JavaScript, HTML5, CSS and a H2 database. Website included navigation bar responsive design for both mobile and desktop versions. Allowing users to add products to the basket and register with the website using username and password, stored and encrypted within the H2 Database"></MediaCard>
      <MediaCard p_name="2D Java Game" image={game} p_discription="Created a multi-level 2D game in Java using BOX2D engine, including various enemy and character interactions. Includes GUI with options to restart and load levels with saved player progress in addition to different sound effects and changing backgrounds for different parts of the game. Multiple controls and abilities for the playable character supported with animations and sounds"></MediaCard>

      </div>*/}
      </div>

      {/*Work Experience+ big Animation and list*/}
      <div className="new__background2">
        <div className="app__background2"></div>
        <h1 id="app__workexp" className="app__whiteText">
          <span style={{ color: "orange" }}>W</span>ORK{" "}
          <span style={{ color: "orange" }}>E</span>XPERIENCE
        </h1>
        <h2 className="app__whiteText">
          Something that happened in the past and something that is happening
          now.
        </h2>
        <div className="app__experience">
          <div>
            {/*<img src={arrowDown}/>*/}
            <WorkExp
              headding="Epigeum(Oxford University Press) "
              description="Worked on database migration with the use of Python scripts and mySQL queries for organizing and retrieving data. Focused on updating KPI pages with a use of sumantic-ui running on react front end and node js with express. Created a page with functionality to display changed in real time based on the values form database, involving use of JavaScript, CSS, React, Node, Express	Worked on webapp deployment to the platforms like Heroku, AWS Amplify, AWS EC2 with the creation of Lambda functions and API’s."
              date="20.20.2020"
              icon={webDevAvatar}
            ></WorkExp>
          </div>
          <div>
            {/*<img src={arrowDown}/>*/}
            <WorkExp
              headding="Culture-Hint "
              description="Worked on database migration with the use of Python scripts and mySQL queries for organizing and retrieving data. Focused on updating KPI pages with a use of sumantic-ui running on react front end and node js with express. Created a page with functionality to display changed in real time based on the values form database, involving use of JavaScript, CSS, React, Node, Express	Worked on webapp deployment to the platforms like Heroku, AWS Amplify, AWS EC2 with the creation of Lambda functions and API’s."
              date="20.20.2020"
              icon={webDevAvatar}
            ></WorkExp>
          </div>
          <div>
            {/*<img src={arrowDown}/>*/}
            <WorkExp
              headding="SIMENS STEM Project "
              description="Completed a STEM project to develop an AI-based solution to help Siemens identify broken signals, replacing the need of dangerous manual checks. Involving independent and team work, time commitment for the research in AI, group meetings and discussions Conducted AI learning research and presented learned concepts to the team members. Practiced using OpenCV and Matplotlib libraries in Python, enhancing awareness of the technologies and data visualisation Worked as part of a team of 6 to produce a business report and Powerpoint presentation Delivered a group presentation on the proposed solution, including a Q&A session."
              date="20.20.2020"
              icon={programAvatar}
            ></WorkExp>
          </div>
          <h1 className="app__footer">
            <span style={{ color: "orange" }}>V</span>olunteering
          </h1>
          <div>
            {/*<img src={arrowDown}/>*/}
            <WorkExp
              headding="City Data Science Society "
              description="Working as Communications Manager: Helped organise and promote societies events including talks and courses. Motivated students to participate in solving challenges promoted by society. Created advertising materials for the events and talks."
              date="20.20.2020"
              icon={teamWorkAvatar}
            ></WorkExp>
          </div>
          <div>
            {/*<img src={arrowDown}/>*/}
            <WorkExp
              headding="Royall Russel MUN "
              description="Held the responsibility for planning and insuring a smooth running of an event involving more than 200 people Worked in a team with other Heads of Departments to create a schedule for the event and plan time tables for the secretariat groups splitting responsibilities and making groups Supervised and managed a team of 20 Secretariats by delegating tasks, checking the progress, preventing possible problems and resolving them if they occurred Provided information to the event attendees and assisted with preparing and setting up the main hall and debate rooms, preparing the props and microphones for the sessions"
              date="20.20.2020"
              icon={teamWorkAvatar}
            ></WorkExp>
          </div>
          <h3 className="app__footer">&copy; 2021 Maksym Malynovskyi</h3>
        </div>
      </div>
      {/*Contact me

      <div className="app__contactme">
      <h1>Contant me</h1>
      <h2>Here you can send me a message or take a copy of my CV. </h2>
        <div className="app__cv">
            <Button  variant="contained" color="">MY CV</Button>
        </div>
          <div className="app__mail">
           <Mail/>
          </div>
            </div>
*/}

      {/*footer*/}
    </div>
  );
}

export default App;
