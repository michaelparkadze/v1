import React from "react";
import Button from "../Button";
import styles from "./styles.module.scss";

export default function ProjectCard(props) {
  const {
    name,
    description,
    type,
    gradient1,
    gradient2,
    iconBg,
    liveLink,
    codeLink,
  } = props;
  return (
    <div className={styles.card}>
      <div
        className={styles.icon}
        style={{
          backgroundColor: iconBg,
        }}
      >
        {name[0]}
      </div>
      <div
        className={styles.background}
        style={{
          background: `linear-gradient(30deg, ${gradient1}, ${gradient2})`,
        }}
      >
        {type}
      </div>
      <div className={styles.description}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.cta}>
          <a href={codeLink} target="_blank" rel="noreferrer noopener">
            <Button>Github</Button>
          </a>
          <a href={liveLink} target="_blank" rel="noreferrer noopener">
            <Button disabled={!liveLink}>Demo</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
