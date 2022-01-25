import { FC } from "react";
import styles from "./Indicator.module.css";

interface IIndicator {
  indicatorRef: any;
}

const Indicator: FC<IIndicator> = ({ indicatorRef }) => {
  return <div className={styles.indicator} ref={indicatorRef}></div>;
};

export default Indicator;
