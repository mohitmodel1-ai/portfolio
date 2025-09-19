import myphoto2 from "../assets/mohit..jpg";   // ✅ make sure filename is correct
import "./About.css";  // importing CSS file

const About = () => {
  return (
    <div className="about-container">
      <p className="heading">About ME</p>

      <div className="about-content">
        <div className="about-text">
          <p>
            Hi I'm Mohit Kumar! Passionate and detail-oriented Full Stack Web
            Developer in designing, developing, and maintaining dynamic and
            responsive web applications. Skilled in both front-end and back-end
            technologies, including{" "}
            <span className="highlight">
              HTML, CSS, Bootstrap, Tailwind CSS, Python, JavaScript, C++, React
              js, Node.js, Express js, and databases such as MySQL and MongoDB
              also using version control system git and github
            </span>
            . Adept at collaborating with cross-functional teams to deliver
            innovative solutions that enhance user experience and meet client
            requirements. Committed to continuous learning and staying updated
            with the latest industry trends to build scalable, efficient, and
            user-friendly web platforms.
          </p>
        </div>

        <div className="about-image">
          <img src={myphoto2} alt="myphoto2" />
        </div>
      </div>
    </div>
  );
};

export default About;
