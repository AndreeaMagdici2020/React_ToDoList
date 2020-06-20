import React from "react";
import styles from "./ToDoItemsStyle.module.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";
import Draggable from "react-draggable";

class ToDoItem extends React.Component {
  state = {
    newDate: "",
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  };
  //===========> Draggable
  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };
  handleStart = () => {
    let activeDrags = this.state.activeDrags;
    this.setState({ activeDrags: ++activeDrags });
  };
  handleStop = () => {
    let activeDrags = this.state.activeDrags;
    this.setState({ activeDrags: --activeDrags });
  };
  //================>Draggable
  setItemdueDate = (event) => {
    console.log("hello");
    console.log("date din props:", this.props.todo.date);
    this.setState({ newDate: new Date(event.target.value) });
    console.log("this.state.newDate:", this.state.newDate);
  };
  onSubmit = () => {
    let localStorageItemList = localStorage.getItem("ItemsinLocalStorage");
    let parseData = JSON.parse(localStorageItemList);
    parseData.toDoItems.map((item) => {
      if (item.id === this.props.todo.id) {
        item.date = this.state.newDate;
      }
    });
    console.log("parseData", parseData);
    localStorage.setItem(
      "ItemsinLocalStorage",
      JSON.stringify({ toDoItems: parseData.toDoItems })
    );
  };
  render() {
    const { id } = this.props;
    const style1 = { color: "red", textDecoration: "line-through" };
    const style2 = { color: "navy" };
    const { date } = this.props.todo;
    const dragHandlers = {
      handleStart: this.handleStart,
      handleStop: this.handleStop,
    };
    const { deltaPosition, controlledPosition } = this.state;
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
        <Draggable
          handle=".dragg3"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <div className="draggZone">
            {this.props.todo.show === true ? (
              <div className="dragg3">
                <div draggable className={styles.ToDoCard}>
                  <div className={styles.mydivheader}></div>
                  <h2 className={styles.h2}>{this.props.todo.title}</h2>
                  <span style={{ marginLeft: "20px" }}>
                    Due by: {this.props.todo.date}
                  </span>
                  <input
                    style={{ marginLeft: "10px" }}
                    placeholder="  Insert a date: mm.dd.yyyy"
                    value={this.state.dateValue}
                    onChange={this.setItemdueDate}
                    type="text"
                  ></input>
                  <br />

                  <button
                    onClick={this.onSubmit}
                    style={{ marginLeft: "40%", marginTop: "6%" }}
                  >
                    Update
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </Draggable>
      </div>
    );
  }
}

export default ToDoItem;
