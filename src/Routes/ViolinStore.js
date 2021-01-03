import React from "react";
import Work from "../Components/Work";

export default () => (
  <Work
    Index="03"
    Title={
      <span>
        <span className="text-frame">
          <span>VIOLIN</span>
        </span>
        <span className="text-frame">
          <span>STORE</span>
        </span>
      </span>
    }
    Date="11.2020"
    Tech="HTML5, CSS3, JavaScript"
    demoLink="https://jiasong214.github.io/violin_shop/"
    githubLink="https://github.com/JiaSong214/violin_shop/"
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
