import React from "react";
import "./Credits.css";
import { Icon } from "semantic-ui-react";
import classNames from "classnames";

const Credits = () => {
  return (
    <div className="creditsContainer">
      <div className={classNames("socialMediaContainer", "linkedInContainer")}>
        <a href="https://www.linkedin.com/in/gautierdarchen/" className="link">
          <Icon name="linkedin" /> gautierdarchen
        </a>
      </div>

      <div className={classNames("socialMediaContainer", "githubContainer")}>
        <a href="https://github.com/gdarchen" className="link">
          <Icon name="github" /> gdarchen
        </a>
      </div>

      <div className={classNames("socialMediaContainer", "twitterContainer")}>
        <a href="https://twitter.com/GDarchen" className="link">
          <Icon name="twitter" /> @GDarchen
        </a>
      </div>
    </div>
  );
};

export default Credits;
