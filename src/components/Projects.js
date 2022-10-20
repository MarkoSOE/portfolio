import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Full Stack Flash Cards": {
        title: "full stack interview questions",
        desc:
          "A full stack web dev interview flashcard app containing questions covering a large range of behavioral and technical questions.",
        techStack: "CSS, JS, HTML, MongoDB",
        link: "https://github.com/MarkoSOE/codingcuecards",
        open: "https://interviewprepapp.herokuapp.com/",
        image: "/assets/interview.webp",
      },
      Express: {
        title: "Express Lounge",
        desc:
          "This web app allows users to find recipes (ingredients, quantities, cup/vessel) for any alcoholic drink they'd like to make.",
        techStack: "Node.js, Express.js, HTML5, CSS3, EJS",
        link: "https://github.com/MarkoSOE/cocktailAPI",
        open: "https://cocktailnodeapi.herokuapp.com/",
        image: "/assets/express.webp",
      },
    };
    const projects = {
      "QuikTalk (WIP)": {
        desc:
          "A real time social media messaging application that allows users to interact with one another through direct or group chats.",
        techStack: "Node.js (Express.js), React.js, MongoDB",
        link:
          "https://github.com/MarkoSOE/QuikTalk"
      },
      "To Do List": {
        desc:
          "Simple web app that allows you to create, read, and delete to do list items.",
        techStack: "JS, HTML, CSS, EJS, MongoDB",
        link: "https://github.com/MarkoSOE/todolist",
      },
      "Address Book": {
        desc:
          "React app with CRUD functionality using local JSON server",
        techStack: "React.JS, HTML / CSS",
        link: "https://github.com/MarkoSOE/addressbook",
      },
      "Terminal3": {
        desc:
          "Online single webpage for a small local coffee shop.",
        techStack: "HTML, CSS, JS",
        link: "https://github.com/MarkoSOE/terminal3",
        open: "https://terminal3.netlify.app/"
      },
      // "Game Centre": {
      //   desc:
      //     "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
      //   techStack: "Java, Android Studio",
      //   link: "https://github.com/gazijarin/gamecentre",
      //   open: ""
      // },
      // "Minimax Stonehenge": {
      //   desc:
      //     "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
      //   techStack: "Python",
      //   link: "https://github.com/gazijarin/stonehenge",
      //   open: ""
      // }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
