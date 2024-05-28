import { IconMail, IconMapSearch, IconPhone } from "@tabler/icons-react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-title">
              <p>Contact</p>
              <h3>Don't be shy! Hit me up! 👇</h3>
            </div>
            <div className="contact-icons">
              <div className="contact-icon-box">
                <span>
                  <IconMail width={30} height={30} />
                </span>
                <div className="contact-info">
                  <h3>Mail</h3>
                  <a href="mailto:robertomadalin18@gmail.com">
                    robertomadalin18@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-icon-box">
                <span>
                  <IconPhone width={30} height={30} />
                </span>
                <div className="contact-info">
                  <h3>Phone</h3>
                  <p>+40758534129</p>
                </div>
              </div>
              <div className="contact-icon-box">
                <span>
                  <IconMapSearch width={30} height={30} />
                </span>
                <div className="contact-info">
                  <h3>Location</h3>
                  <p>Suceava, Romania</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
