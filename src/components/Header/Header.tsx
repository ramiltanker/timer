import React, { useContext } from "react";

// Styles
import styles from "./Header.module.css";
// Styles

import classNames from "classnames";

import { ThemeContext } from "../../providers/ThemeProvider";

const Header = () => {
  const { setType, type } = useContext(ThemeContext);

  const handleSwitchTheme = () => {
    if (type === "light") setType("dark");
    else setType("light");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button
          className={classNames(styles.theme, type === "dark" && styles.dark)}
          type="button"
          onClick={handleSwitchTheme}
        ></button>
      </div>
    </header>
  );
};

export default Header;
