import React from "react";
import styles from "./HeaderStyle.module.css";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <span className={styles.span}> ToDo App</span>
      </div>
    );
  }
}
export default Header;
