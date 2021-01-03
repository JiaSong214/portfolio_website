import React from "react";
import Work from "../Components/Work";

export default () => (
  <Work
    Index="01"
    Title={
      <span>
        <span className="text-frame">
          <span>REACT</span>
        </span>
        <span className="text-frame">
          <span>SOMETHING</span>
        </span>
      </span>
    }
    Date="06.2020"
    Tech="React Hooks, Redux, SASS"
    demoLink="https://jiasong214.github.io/nokcha_store/"
    githubLink="https://github.com/JiaSong214/nokcha_store"
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
