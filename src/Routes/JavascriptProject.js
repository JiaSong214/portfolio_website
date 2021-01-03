import React from "react";
import Work from "../Components/Work";

export default () => (
  <Work
    Index="04"
    Title={
      <span>
        <span className="text-frame">
          <span>JAVASCRIPT</span>
        </span>
        <span className="text-frame">
          <span>PROJECT</span>
        </span>
      </span>
    }
    Date="06.2020"
    Tech="JavaScript, CSS3, HTML5"
    demoLink="https://jiasong214.github.io/Javascript_Project/"
    githubLink="https://github.com/JiaSong214/javascript_project"
    Description={
      <span>
        <span className="text-frame">
          <span>Lorem ipsum dolor sit amet.</span>
        </span>
        <span className="text-frame">
          <span>consectetur adipiscing elit. Sed vitae tortor ultricies,</span>
        </span>
        <span className="text-frame">
          <span>
            consequat dolor quis, pretium mauris. Pellentesque habitant morbi.
          </span>
        </span>
        <span className="text-frame">
          <span>
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </span>
        </span>
        <span className="text-frame">
          <span>
            Maecenas porttitor mi in lectus vehicula, non viverra sapien
            pharetra.
          </span>
        </span>
      </span>
    }
    Images=""
  />
);
