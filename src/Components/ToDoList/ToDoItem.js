import React from "react";
import styles from "./ToDoItemsStyle.module.css";

import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";
class ToDoItem extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <div className={styles.todoitem}>
        <input
          className={styles.checkbok}
          onChange={() => {
            this.props.markComplete(id);
            console.log("id", id);
          }}
          type="checkbox"
          checked={this.props.checked}
        ></input>
        {this.props.todo.title}
        <HighlightOffTwoToneIcon
          className={styles.deleteBtn}
          color="secondary"
          onClick={() => this.props.delToDo(id)}
          style={{ fontSize: "31" }}
        />
      </div>
    );
  }
}

export default ToDoItem;
