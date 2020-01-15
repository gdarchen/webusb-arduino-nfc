import React from "react";
import style from "./Credits.scss";
import { Icon } from "semantic-ui-react";

const Credits = () => {
  return (
    <div className={style.creditsContainer}>
      <div className={style.linkedInContainer}>
        <a
          href="https://www.linkedin.com/in/gautierdarchen/"
          className={style.link}
        >
          <Icon name="linkedin" /> gautierdarchen
        </a>
      </div>

      <div className={style.githubContainer}>
        <a href="https://github.com/gdarchen" className={style.link}>
          <Icon name="github" /> gdarchen
        </a>
      </div>

      <div className={style.twitterContainer}>
        <a href="https://twitter.com/GDarchen" className={style.link}>
          <Icon name="twitter" /> @GDarchen
        </a>
      </div>
    </div>
  );
};

export default Credits;
