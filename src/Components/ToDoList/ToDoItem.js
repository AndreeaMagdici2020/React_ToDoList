import React from "react";
import styles from "./ToDoItemsStyle.module.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";
import schedule from "./schedule.png";

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
        <MoreHorizIcon
          color="primary"
          style={{ fontSize: "30", verticalAlign: "middle" }}
        />
        <EditIcon
          color="primary"
          style={{
            float: "right",
            marginRight: "50px",
            verticalAlign: "middle",
            marginTop: "10px",
            cursor: "pointer",
          }}
          onClick={() => this.props.ShowItemCard(id)}
        />

        {this.props.todo.show === true ? (
          <div className={styles.ToDoCard}>
            <div className={styles.mydivheader}></div>
            {this.props.todo.title}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default ToDoItem;
