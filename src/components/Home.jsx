import myphoto from "../assets/mohit..jpg";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import MohitResume from "../assets/mohit.resume_2.pdf";
import { FaAddressCard } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import Projects from "./Projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareWhatsapp } from "react-icons/fa6";
import "./Home.css";   // 👈 CSS file import

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <div className="navbar">
        <h1 className="logo">Portfolio</h1>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </div>
      </div>

      {/* Home Section */}
      <div className="home-section" id="home">
        <div className="floating-home-btn">
          <a href="#home"><AiFillHome /></a>
        </div>

        <div className="intro">
          <h1 className="intro-title">
            Hi! I'm <span className="highlight">Mohit</span>
          </h1>
          <h2 className="intro-subtitle">
            <span className="bold">MERN</span> Stack Web Developer
          </h2>
          <h3 className="intro-tagline">
            I'm build your own dream website
          </h3>

          <div className="buttons">
            <a href={MohitResume } download className="btn">
              <FaAddressCard /> Resume
            </a>
            <a href="#project" className="btn">
              View My Projects <FaArrowRight />
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/mohitmodel1-ai" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mohit-kumar-a825a9138/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/mohittufan/?hl=en#" target="_blank" rel="noreferrer"><RiInstagramFill /></a>
            <a href="https://wa.me/9472941443" target="_blank" rel="noreferrer"><FaSquareWhatsapp /></a>
          </div>
        </div>

        <div className="profile-pic">
          <img src={myphoto} alt="myPhoto" />
        </div>
      </div>

      {/* Other Sections */}
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="project"><Projects /></div>
      <div id="contact"><Contact /></div>

      {/* Resume Download */}
      <div id="resume" className="resume-section">
        <p className="resume-text">
          Click and Download my resume here <IoMdDownload />
        </p>
        <a href={MohitResume } download className="download-btn">
          Download <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default Home;
