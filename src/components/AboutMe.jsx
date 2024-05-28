import WorkingEmoji from "../assets/working-emoji.jpg";
import AboutImg from "../assets/about-img.webp";

const AboutMe = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="img-side">
              <img src={AboutImg} className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About Me</h3>
              <h4>
                Front-end Developer <br /> based in Suceava, Romania 📍
              </h4>
              <p>
                Hey, my name is Madalin Holovenciuc, With a passion for web
                development, I am a technology enthusiast determined to carve my
                path in the exciting world of web programming. I have a profound
                desire to learn and grow in this dynamic and opportunity-rich
                industry. With beginner-level knowledge in HTML, CSS, JavaScript
                and ReactJS, I am eager to expand my skills and explore new
                technologies to contribute to captivating projects and bring
                innovative ideas to the online space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
