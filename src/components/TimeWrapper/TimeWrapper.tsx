import { FC, useContext } from "react";

// Styles
import styles from "./TimeWrapper.module.css";
// Styles

import classNames from "classnames";

import { ThemeContext } from "../../providers/ThemeProvider";

interface ITimeWrapper {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  time: any;
  timerStart: boolean;
}

const TimeWrapper: FC<ITimeWrapper> = ({ handleChange, time, timerStart }) => {
  const { type } = useContext(ThemeContext);

  return (
    <form className={styles.time_wrapper}>
      <div className={styles.box_wrapper}>
        <div className={styles.time_box}>
          <input
            className={classNames(styles.input, type === "dark" && styles.dark)}
            type={"number"}
            placeholder="00"
            min="0"
            max="24"
            name="hours"
            onChange={handleChange}
            value={time.hours}
            disabled={timerStart}
          />
        </div>
        <p className={classNames(styles.name, type === "dark" && styles.dark)}>
          Hours
        </p>
      </div>
      <div className={styles.box_wrapper}>
        <div className={styles.time_box}>
          <input
            className={classNames(styles.input, type === "dark" && styles.dark)}
            type={"number"}
            min="0"
            max="60"
            name="minutes"
            onChange={handleChange}
            value={time.minutes}
            placeholder="00"
            disabled={timerStart}
          />
        </div>
        <p className={classNames(styles.name, type === "dark" && styles.dark)}>
          Minutes
        </p>
      </div>
      <div className={styles.box_wrapper}>
        <div className={styles.time_box}>
          <input
            className={classNames(styles.input, type === "dark" && styles.dark)}
            type={"number"}
            placeholder="00"
            min="0"
            max="60"
            name="seconds"
            onChange={handleChange}
            value={time.seconds}
            disabled={timerStart}
          />
        </div>
        <p className={classNames(styles.name, type === "dark" && styles.dark)}>
          Seconds
        </p>
      </div>
    </form>
  );
};

export default TimeWrapper;
