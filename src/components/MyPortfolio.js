import React, { useRef, useEffect, useState } from "react";
import { Tabs } from "@yazanaabed/react-tabs";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import merns from "../projects/merns";
import allProjects from "../projects/allProjects";
// import blogs from "../Blogs/Blogs";

import Footer from "./Footer/index";
import BlogsContainer from "./BlogsContainer";
import Education from "./AboutMe/Education";
import Experience from "./AboutMe/Experience";
import Certs from "./AboutMe/Certs";
import Skills from "./AboutMe/Skills";
import Interest from "./AboutMe/Interest";
// import Footer from "./Footer";

function MyPortfolio() {
  const [contact, setContact] = useState(false);
  const [work, setWork] = useState(false);
  const [ex, setEx] = useState(false);
  const [certs, setCerts] = useState(false);
  const [skills, setSkills] = useState(false);
  const [interests, setInterest] = useState(false);

  const showContact = () => {
    setContact(true);
  };
  const hideContact = () => {
    setContact(false);
  };

  //   Experience
  const showEx = () => {
    setEx(true);
  };
  const hideEx = () => {
    setEx(false);
  };
  //   Certification
  const showCert = () => {
    setCerts(true);
  };
  const hideCerts = () => {
    setCerts(false);
  };
  const toggle = () => {
    setWork({ work: !work });
  };
  const hideWork = () => {
    setWork(false);
  };
  // Skills
  const showSkills = () => {
    setSkills(true);
  };
  const hideSkills = () => {
    setSkills(false);
  };
  // Interest
  const showInterest = () => {
    setInterest(true);
  };
  const hideInterest = () => {
    setInterest(false);
  };

  const reactNative = [
    {
      id: 1,
      title: "React native 1",
      time: "12/1/2020",
    },
    {
      id: 2,
      title: "REACT native 2",
      time: "12/1/2020",
    },
    {
      id: 3,
      title: "React native  APP 3",
      time: "12/1/2020",
    },
  ];
  const projects = [
    {
      id: 1,
      title: "Project 1",
      time: "12/1/2020",
    },
    {
      id: 2,
      title: "Project 2",
      time: "12/1/2020",
    },
    {
      id: 3,
      title: "Project 3",
      time: "12/1/2020",
    },
    {
      id: 4,
      title: "Project 4",
      time: "12/1/2020",
    },
    {
      id: 5,
      title: "Project 5",
      time: "12/1/2020",
    },
    {
      id: 6,
      title: "Project 6",
      time: "12/1/2020",
    },
  ];

  return (
    <div className="me-container">
      <nav id="top">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            {/* <a href={`#${child.get('label')}`}>{child.get('label')}</a> */}
            <a href="#aboutme">About me</a>
            {/* <a href="#">About me</a> */}
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#" onClick={showContact}>
              Contact
            </a>
          </li>
          <li>
            <a href="#">Download my CV</a>
          </li>
        </ul>
      </nav>
      <div className="section about-me" id="aboutme">
        <h1>About me</h1>
        <p>
          My name is Chihabeddine Ahmed, I am a Front-End and Back-End developer{" "}
          <br />
          Mainly focused on JavaScript and its Frameworks. <br /> I am
          interested in React.JS, Node.js and JavaScript related technoliges.{" "}
          <br /> I have serious passion for web development and I like
          developing apps.
        </p>
        <div className="toggle-btns">
          <button onClick={toggle}> Education</button>
          {/* <button onClick={()=> showEx(setEx(true))}>Experience</button> */}
          <button onClick={showEx}>Experience</button>
          <button onClick={showSkills}>Skills & Languages </button>
          {/* <button onClick={showEx}>Languages</button> */}
          <button onClick={showInterest}>Interests</button>
          <button onClick={showCert}>Licenses & Certificates</button>
        </div>
        {contact ? <h1 onClick={hideContact}>Contact me </h1> : null}
        {work ? <Education hideWork={hideWork} /> : null}
        {ex ? <Experience hideEx={hideEx} /> : null}

        {skills ? <Skills hideSkills={hideSkills} /> : null}
        {interests ? <Interest hideInterest={hideInterest} /> : null}
        {certs ? <Certs hideCerts={hideCerts} /> : null}
      </div>

      <div className="projects" id="projects">
        <div className="project-inner">
          <h1>Projects</h1>
          {/* <p>Collection of projects the I have completed and others that are pending</p> */}
          <div className="projects-nav">
            <Tabs
              activeTab={{
                id: "tab1",
              }}
            >
              <Tabs.Tab id="tab1" title="All">
                {/* <div style={{ padding: 10, color:"black" }}> */}
                <div className="all">
                  {allProjects.allProjects.map((project, id) => (
                    <div className="item-card card-blog" key={id}>
                      {project.title}
                      {project.time}
                      <div class="hidebefore-hover show-after-hover">
                        Show at hover{" "}
                      </div>
                    </div>
                  ))}
                </div>
              </Tabs.Tab>
              <Tabs.Tab id="tab2" title="MERN Stack">
                <div className="all">
                  {merns.merns.map((project, id) => (
                    <div className="item-card" key={id}>
                      {project.title}
                      {project.time}
                    </div>
                  ))}
                </div>
              </Tabs.Tab>
              <Tabs.Tab id="tab3" title="React-Native">
                <div className="all">
                  {reactNative.map((project, id) => (
                    <div className="item-card" key={id}>
                      {project.title}
                      {project.time}
                    </div>
                  ))}
                </div>
              </Tabs.Tab>
              <Tabs.Tab id="tab4" title="VueJS">
                <div className="all">
                  {projects.map((project, id) => (
                    <div className="item-card" key={id}>
                      {project.title}
                      {project.time}
                    </div>
                  ))}
                </div>
              </Tabs.Tab>
              <Tabs.Tab id="tab5" title="Others">
                <div className="all">
                  {allProjects.allProjects.map((project, id) => (
                    <div className="item-card" key={id}>
                      <div class="flip-card-inner">
                        <div class="flip-card-front">
                          <img
                            src={project.imgurl}
                            style={{ width: "100%", height: "100%" }}
                            alt=""
                          />
                          {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
                        </div>
                        <div class="flip-card-back">
                          <h1>{project.title} </h1>
                          <p>Architect & Engineer</p>
                          <p>We love that guy</p>
                        </div>
                      </div>

                      {/* {project.title}
                      {project.time} */}
                    </div>
                  ))}
                </div>
              </Tabs.Tab>
            </Tabs>
          </div>
        </div>
      </div>

      <BlogsContainer />
      <Footer />
    </div>
  );
}

export default MyPortfolio;
