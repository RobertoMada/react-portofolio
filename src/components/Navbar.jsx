import { IconMenu2, IconX } from "@tabler/icons-react";
import "../App.css";
import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      <nav>
        <h3 onClick={pageUp} className="logo">
          Madalin.dev
        </h3>

        <ul className="primary-navigation">
          {navlinks.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          <li>
            <IconMenu2
              onClick={hamburgerMenu}
              className="mobile-menu"
              width={30}
              height={30}
            />
          </li>
        </ul>

        <div
          className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}
        >
          <span>
            <IconX onClick={hamburgerMenu} width={30} height={30} />
          </span>
          <ul>
            {navlinks.map((item) => (
              <li key={item.name} onClick={hamburgerMenu}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
