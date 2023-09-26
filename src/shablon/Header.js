import "../style/Header.css";
import "../style/main.css";
import "../style/Media.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const handleNavToggle = () => {
    const nav = document.querySelector("#nav");
    const navBtnImg = document.querySelector("#nav-btn-img");

    if (nav.classList.toggle("open")) {
      navBtnImg.src = "./img/svgfile/nav-close.svg";
    } else {
      navBtnImg.src = "./img/svgfile/NAV.svg";
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-nav">
          <a href="#!" className="logo">
            Kelvin
          </a>

          <nav id="nav" className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#!" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link">
                  Works
                </a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#!" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
            <button
              id="nav-btn"
              className="nav-button"
              onClick={handleNavToggle}
            >
              <img
                id="nav-btn-img"
                src="./img//svgfile/NAV.svg"
                alt="nav button"
              />
            </button>
          </nav>
        </div>

        <div className="header-row">
          <div className="header-content" data-aos="fade-up">
            <h1 className="header-heading">
              Kelvin Kramer<span>Designer & Developer</span>
            </h1>
            <p>
              I’m a portrait, fashion and lifestyle photographer living In New
              York City. During my thirteen year tenure here.
            </p>
          </div>

          <div className="header-img" data-aos="fade-left">
            <picture>
              <source
                media="(max-width:799px)"
                srcSet="./img/hero-mobile.png"
              />
              <img src="./img/hero.png" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
