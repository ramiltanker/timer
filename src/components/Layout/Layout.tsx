import React, { FC, useContext } from "react";

// Styles
import styles from "./Layout.module.css";
// Styles

import classNames from "classnames";

import { ThemeContext } from "../../providers/ThemeProvider";

interface ILayout {
  children: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  const { type } = useContext(ThemeContext);
  return (
    <div className={classNames(styles.layout, type === "dark" && styles.dark)}>
      {children}
    </div>
  );
};

export default Layout;
