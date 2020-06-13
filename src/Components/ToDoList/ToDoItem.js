import React from "react";
import styles from "./ToDoItemsStyle.module.css";

import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";
class ToDoItem extends React.Component {
  render() {
    const { id } = this.props;
    const style1 = { color: "red", textDecoration: "line-through" };
    const style2 = { color: "navy" };
    return (
      <div className={styles.todoitem}>
        <input
          className={styles.checkbox}
          onChange={() => {
            this.props.markComplete(id);
            console.log("id", id);
            console.log(this.props.todo.done);
          }}
          type="checkbox"
          checked={this.props.checked}
        ></input>
        <span style={this.props.checked === true ? style1 : style2}>
          {this.props.todo.title}
        </span>
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
