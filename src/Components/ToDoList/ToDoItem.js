import React from "react";
import styles from "./ToDoItemsStyle.module.css";
class ToDoItem extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <div className={styles.todoitem}>
        <input
          onChange={() => {
            this.props.markComplete(id);
            console.log("id", id);
          }}
          type="checkbox"
          checked={this.props.checked}
        ></input>
        {this.props.todo.title}
        <button
          style={{
            marginLeft: "50px",
            backgroundColor: "rgba(175, 238, 238, 0.87)",
            border: "none",
          }}
          onClick={() => this.props.delToDo(id)}
        >
          <span role="img">❌</span>
        </button>
      </div>
    );
  }
}

export default ToDoItem;
