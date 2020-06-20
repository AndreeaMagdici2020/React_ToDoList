import React from "react";
import styles from "./ToDoItemsStyle.module.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffTwoToneIcon from "@material-ui/icons/HighlightOffTwoTone";
import Draggable from "react-draggable";
import ReactDOM from "react-dom";

class ToDoItem extends React.Component {
  state = {
    ctiveDrags: 0,
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
    this.setState({ activeDrags: ++this.state.activeDrags });
  };
  handleStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };
  //================>Draggable
  render() {
    const { id } = this.props;
    const style1 = { color: "red", textDecoration: "line-through" };
    const style2 = { color: "navy" };
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
          <div>
            {this.props.todo.show === true ? (
              <div>
                <div className="dragg3">
                  <div draggable className={styles.ToDoCard}>
                    <div className={styles.mydivheader}></div>
                    {this.props.todo.title}
                  </div>
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
