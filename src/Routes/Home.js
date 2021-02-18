import React, { useState, useEffect, useRef } from "react";
import "../Style/Home.scss";
import { Link } from "react-router-dom";

export default () => {
  const navRef = useRef(),
    introRef = useRef(),
    aboutRef = useRef(),
    workRef = useRef(),
    contactRef = useRef();

  // const [navPosition, setNavPosition] = useState(0);
  const [currentPosition, setCurrentPosition] = useState("");

  const [renderAni, setRenderAni] = useState("");
  const [introAni, setIntroAni] = useState("");
  const [aboutAni, setAboutAni] = useState("");
  const [workAni, setWorkAni] = useState("");
  const [contactAni, setContactAni] = useState("");

  //first render animation
  useEffect(() => {
    setTimeout(() => {
      setIntroAni("--active");
    }, 310);
  }, []);

  useEffect(() => {
    //scroll effects
    const playScrollAni = () => {
      let offsetHeight = {
        current: window.pageYOffset,
        intro: introRef.current.offsetHeight,
        about: aboutRef.current.offsetHeight,
        work: workRef.current.offsetHeight,
      };

      if (offsetHeight.intro - window.innerHeight < offsetHeight.current) {
        setAboutAni("--active");
        setCurrentPosition("--about");
      }

      if (
        offsetHeight.about + offsetHeight.intro - window.innerHeight / 2 <
        offsetHeight.current
      ) {
        setWorkAni("--active");
        setCurrentPosition("--work");
      }

      if (
        offsetHeight.about +
          offsetHeight.intro +
          offsetHeight.work -
          window.innerHeight / 2 <
        offsetHeight.current
      ) {
        setContactAni("--active");
        setCurrentPosition("--contact");
      }
    };

    window.addEventListener("scroll", playScrollAni);
    window.addEventListener("mousemove", setMousePosition);

    return () => {
      window.removeEventListener("scroll", playScrollAni);
      window.removeEventListener("mousemove", setMousePosition);
    };
  }, []);

  const setMousePosition = (e) => {
    const cursorTag = document.querySelector("#cursor");
    cursorTag.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  };

  const setHoverEffect = {
    videoTag: document.querySelector("video"),

    comingSoon: function () {
      this.videoTag.setAttribute("src", "");
    },
    netflixClone: function () {
      this.videoTag.setAttribute(
        "src",
        require("../Assets/netflixClone-video.mp4")
      );
    },
    violinStore: function () {
      this.videoTag.setAttribute(
        "src",
        require("../Assets/violinStore-video.mp4")
      );
    },
    javascriptProject: function () {
      this.videoTag.setAttribute(
        "src",
        require("../Assets/javascriptProject-video.mp4")
      );
    },
    mouseLeaveFromItem: function () {
      this.videoTag.setAttribute("src", "");
    },
  };

  return (
    <div id="container" className={currentPosition}>
      <div id="cursor">
        <video width="480px" autoPlay loop muted src="" />
      </div>
      <header className={`header ${introAni}`}>
        <div className="header__title">
          <div className="text-frame">
            <span>Front-end</span>
          </div>
          <div className="text-frame">
            <span>Developer</span>
          </div>
        </div>
        <div className="header__year">
          <div className="text-frame">
            <span>2021年</span>
          </div>
          <div className="text-frame">
            <span>Ver - 01</span>
          </div>
        </div>
        <nav
          className={`header__nav ${currentPosition}`}
          ref={navRef}
          // style={{ transform: `translateY(${navPosition}px)` }}
        >
          <ul className="header__nav__list">
            <li
              className="text-frame"
              onClick={() =>
                window.scrollTo({
                  left: 0,
                  top: aboutRef.current.offsetTop,
                  behavior: "smooth",
                })
              }
            >
              <span>
                About
                <span className="underline" />
              </span>
            </li>
            <li
              className="text-frame"
              onClick={() =>
                window.scrollTo({
                  left: 0,
                  top: workRef.current.offsetTop,
                  behavior: "smooth",
                })
              }
            >
              <span>
                Work
                <span className="underline" />
              </span>
            </li>
            <li
              className="text-frame"
              onClick={() =>
                window.scrollTo({
                  left: 0,
                  top: contactRef.current.offsetTop,
                  behavior: "smooth",
                })
              }
            >
              <span>
                Contact
                <span className="underline" />
              </span>
            </li>
          </ul>
        </nav>
      </header>
      <div className="right-container">
        <section className={`intro ${introAni}`} ref={introRef}>
          <div className="intro__innerbox">
            <div className="intro__innerbox2">
              <h1 className="intro__title">
                <div className="text-frame">
                  <span>JIA</span>
                </div>
                <div className="text-frame">
                  <span>SONG</span>
                </div>
              </h1>
              <div className="intro__message">
                <p className="text-frame">
                  <span>Front end Developer who loves Design</span>
                </p>
                <p className="text-frame">
                  <span>Based in Sydney, AUS</span>
                </p>
              </div>
              <div className="intro__current">
                <p className="text-frame">
                  <span>Currently Available</span>
                </p>
              </div>
              <div className="intro__email">
                <p className="text-frame">
                  <span>jiasong214@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={`about ${aboutAni}`} ref={aboutRef}>
          {/* <div className="about__Image"></div> */}
          <p className="about__intro">
            <span className="text-frame">
              <span>Welcome to my page! I'm Jia from South Korea.</span>
            </span>
            <span className="text-frame">
              <span>
                I started to learn Web development during the covid19,
              </span>
            </span>
            <span className="text-frame">
              <span>
                And I'm really into it now. I love design and turn them in to real.
              </span>
            </span>
            <span className="text-frame">
              <span>
                I like learing new things, and I'm good at details.
              </span>
            </span>
          </p>
          <div className="about__skills">
            <h3 className="about__skills__title text-frame">
              <span>What I learn</span>
            </h3>
            <p className="text-frame">
              <span>JavaScript, React</span>
            </p>
            <p className="text-frame">
              <span>CSS3, SASS, Styled-Component, Responsive Design</span>
            </p>
            <p className="text-frame">
              <span>HTML5, Adobe Photoshop</span>
            </p>
          </div>
        </section>
        <section className={`work ${workAni}`} ref={workRef}>
          <h2 className="work__title text-frame">
            <span>WORK</span>
          </h2>
          <ul className="work__list">
            {/* <li className="work__item">
              <Link
                to="/"
                onMouseEnter={() => setHoverEffect.comingSoon()}
                onMouseLeave={() => setHoverEffect.mouseLeaveFromItem()}
              >
                <div className="work__item__num text-frame">
                  <span>01</span>
                </div>
                <div className="work__item__innerbox">
                  <h3 className="work__item__title">
                    <div className="text-frame">
                      <span>Coming</span>
                    </div>
                    <div className="text-frame">
                      <span>Soon</span>
                    </div>
                  </h3>
                </div>
                <div className="circle-container">
                  <div className="circle">
                    <svg>
                      <circle
                        cx="2.85vw"
                        cy="2.85vw"
                        r="2.8vw"
                        stroke="black"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    <span className="arrow">&uarr;</span>
                    <span className="hidden-arrow">&uarr;</span>
                  </div>
                  <div className="circle--behind">
                    <svg>
                      <circle
                        cx="2.85vw"
                        cy="2.85vw"
                        r="2.8vw"
                        stroke="black"
                        strokeWidth="1"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </li>*/}
            <li className="work__item">
              <a href={'//jiasong214.github.io/netflix_clone/#/'} target='_blank'
                onMouseEnter={() => setHoverEffect.netflixClone()}
                onMouseLeave={() => setHoverEffect.mouseLeaveFromItem()}
              >
                <div className="work__item__num text-frame">
                  <span>01</span>
                </div>
                <div className="work__item__innerbox">
                  <h3 className="work__item__title">
                    <div className="text-frame">
                      <span>Netflix</span>
                    </div>
                    <div className="text-frame">
                      <span>Clone</span>
                    </div>
                  </h3>

                  <p className="work__item__tech text-frame">
                    <span>React Hooks, Redux, Styled-Component, TMBd API</span>
                  </p>
                </div>
                <div className="circle-container">
                  <div className="circle">
                    <svg>
                      <circle
                        cx="2.85vw"
                        cy="2.85vw"
                        r="2.8vw"
                        stroke="black"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    <span className="arrow">&uarr;</span>
                    <span className="hidden-arrow">&uarr;</span>
                  </div>
                  <div className="circle--behind">
                    <svg>
                      <circle
                        cx="2.85vw"
                        cy="2.85vw"
                        r="2.8vw"
                        stroke="black"
                        strokeWidth="1"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li className="work__item">
              <a href={'//jiasong214.github.io/violin_store/'} target='_blank'
                onMouseEnter={() => setHoverEffect.violinStore()}
                onMouseLeave={() => setHoverEffect.mouseLeaveFromItem()}
              >
                <div className="work__item__num text-frame">
                  <span>03</span>
                </div>
                <div className="work__item__innerbox">
                  <h3 className="work__item__title">
                    <div className="text-frame">
                      <span>Violin</span>
                    </div>
                    <div className="text-frame">
                      <span>Online Store</span>
                    </div>
                  </h3>

                  <p className="work__item__tech text-frame">
                    <span>HTML5, SASS, JavaScript</span>
                  </p>
                </div>
                <div className="circle-container">
                  <div className="circle">
                    <svg>
                      <circle cx="2.85vw" cy="2.85vw" r="2.8vw" />
                    </svg>
                    <span className="arrow">&uarr;</span>
                    <span className="hidden-arrow">&uarr;</span>
                  </div>
                  <div className="circle--behind">
                    <svg>
                      <circle cx="2.85vw" cy="2.85vw" r="2.8vw" />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
            <li className="work__item">
            <a href={'//jiasong214.github.io/javascript_project/'} target='_blank'
                onMouseEnter={() => setHoverEffect.javascriptProject()}
                onMouseLeave={() => setHoverEffect.mouseLeaveFromItem()}
              >
                <div className="work__item__num text-frame">
                  <span>04</span>
                </div>
                <div className="work__item__innerbox">
                  <h3 className="work__item__title">
                    <div className="text-frame">
                      <span>Javascript</span>
                    </div>
                    <div className="text-frame">
                      <span>Project</span>
                    </div>
                  </h3>
                  <p className="work__item__tech text-frame">
                    <span>ES6, MVC Pattern, CSS3, HTML5</span>
                  </p>
                </div>
                <div className="circle-container">
                  <div className="circle">
                    <svg>
                      <circle
                        cx="2.85vw"
                        cy="2.85vw"
                        r="2.8vw"
                        stroke="black"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    <span className="arrow">&uarr;</span>
                    <span className="hidden-arrow">&uarr;</span>
                  </div>
                  <div className="circle--behind">
                    <svg>
                      <circle
                        cx="2.85vw"
                        cy="2.85vw"
                        r="2.8vw"
                        stroke="black"
                        strokeWidth="1"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <p className="work__code">For code, <a href={'//github.com/JiaSong214'} target='_blank'>click here</a></p>
        </section>
        <section className={`contact ${contactAni}`} ref={contactRef}>
          <h2 className="contact__title text-frame">
            <span>CONTACT</span>
          </h2>
          <ul className="contact__list">
            <li>
              <span className="text-frame">
                <span>
                  <a href="mailto: jiasong214@gmail.com">
                    jiasong214@gmail.com
                  </a>
                </span>
              </span>
            </li>
            <li>
              <span className="text-frame">
                <span>+061 413 173 676</span>
              </span>
            </li>
            <li>
              <span className="text-frame">
                <span>
                  <a
                    href="https://github.com/JiaSong214"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </span>
              </span>
            </li>
          </ul>
        </section>
        <footer>&copy; 2021 All Rights Reserved.</footer>
      </div>
    </div>
    // </div>
  );
};
