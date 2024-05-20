import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc-socials">
              <a
                href="https://github.com/RobertoMada"
                aria-label="github"
                target="_blank"
              >
                <IconBrandGithub width={30} height={30} />
              </a>
              <a
                href="https://ro.linkedin.com/"
                aria-label="linkedid"
                target="_blank"
              >
                <IconBrandLinkedin width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
