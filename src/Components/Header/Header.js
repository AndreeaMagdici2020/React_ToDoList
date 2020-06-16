import React from "react";
import styles from "./HeaderStyle.module.css";
import panda2 from "./panda2.png";
class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <span className={styles.span}>
          {" "}
          <img src={panda2} className={styles.panda} />
          ToDo App
        </span>
      </div>
    );
  }
}
export default Header;
