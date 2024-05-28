import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { skillsIcons } from "../assets/assets";

const Hero = () => {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End React Developer</h1>
                <p>
                  Hi, I'm Madalin Holovenciuc. A passionate Front-End Developer
                  based in Suceva, Romania. 📍
                </p>
                <span>
                  <a
                    aria-label="github"
                    target="_blank"
                    href="https://github.com/RobertoMada"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                  <a
                    aria-label="linkdin"
                    target="_blank"
                    href="https://ro.linkedin.com/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                </span>
              </div>
              <div className="hero-img"></div>
            </div>
            <div className="skills">
              <p>My skills</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt={icon.label} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
