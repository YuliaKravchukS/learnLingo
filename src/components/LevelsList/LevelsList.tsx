import React from "react";
import { LevelsProp } from "../../types/indexTypes";
import css from "./LevelsList.module.css";

const LevelsList: React.FC<LevelsProp> = ({ teacher }) => {
  return (
    <ul className={css.list}>
      {teacher?.levels &&
        teacher.levels.map((level, idx) => (
          <li className={css.item} key={idx}>
            <p className={css.text}>{level}</p>
          </li>
        ))}
    </ul>
  );
};

export default LevelsList;
