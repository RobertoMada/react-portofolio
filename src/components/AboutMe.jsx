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
                Hey, my name is Madalin Holovenciuc, and I'm a Frontend
                Developer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
