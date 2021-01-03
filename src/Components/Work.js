import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Work.scss";

export default ({
  Index,
  Title,
  Date,
  Tech,
  demoLink,
  githubLink,
  Description,
  Images,
}) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    setInterval(() => {
      setActive("--active");
    }, 310);
  }, []);

  return (
    <div id="container" className={active}>
      <aside className="left-container">
        <div className="index">
          <span className="text-frame">
            <span>Work {Index} / 04</span>
          </span>
        </div>
        <div className="backBtn">
          <span className="text-frame">
            <span>
              <Link to="/">Back</Link>
            </span>
          </span>
        </div>
      </aside>
      <div className="right-container case-study">
        <h1 className="case-study__title">{Title}</h1>
        <div className="case-study__meta">
          <div className="case-study__meta__contents">
            <div className="text-frame">
              <span>DATE</span>
            </div>
            <div className="text-frame">
              <span>{Date}</span>
            </div>
          </div>
          <div className="case-study__meta__contents">
            <div className="text-frame">
              <span>TECH</span>
            </div>
            <div className="text-frame">
              <span>{Tech}</span>
            </div>
          </div>
          <div className="case-study__meta__contents">
            <div className="text-frame">
              <span>LINK</span>
            </div>
            <ul className="case-study__meta__Link">
              <li className="text-frame">
                <span>
                  <a href={demoLink} target="_blank">
                    Demo
                  </a>
                </span>
              </li>
              <li className="text-frame">
                <span>
                  <a href={githubLink} target="_blank">
                    Github
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p className="case-study__description">{Description}</p>
        <div className="case-study__contentsBox">{Images}</div>
      </div>
    </div>
  );
};
