import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ToDoList from "./Components/ToDoList/ToDoList";
import AddToDo from "./Components/ToDoList/AddToDo";
import Draggable from "react-draggable";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
    toDoItems: [
      {
        id: Math.random() * 1000000,
        title: "cook dinner",
        done: false,
        show: false,
      },
      {
        id: Math.random() * 1000000,
        title: "clean house",
        done: false,
        show: false,
      },
      {
        id: Math.random() * 1000000,
        title: "watch Kdrama",
        done: false,
        show: false,
      },
    ],
  };
  //draggable component
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
  // adjustXPos = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const { x, y } = this.state.controlledPosition;
  //   this.setState({ controlledPosition: { x: x - 10, y } });
  // };

  // adjustYPos = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const { controlledPosition } = this.state;
  //   const { x, y } = controlledPosition;
  //   this.setState({ controlledPosition: { x, y: y - 10 } });
  // };

  // onControlledDrag = (e, position) => {
  //   const { x, y } = position;
  //   this.setState({ controlledPosition: { x, y } });
  // };

  // onControlledDragStop = (e, position) => {
  //   this.onControlledDrag(e, position);
  //   this.handleStop();
  // };
  //=========================>draggable
  componentDidMount() {
    const parsedData = JSON.parse(localStorage.getItem("ItemsinLocalStorage"));
    console.log("parsedData", parsedData);
    this.setState({ toDoItems: parsedData.toDoItems });
  }

  markComplete = (id) => {
    this.setState({
      toDoItems: this.state.toDoItems.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
          console.log(item);
        }
        return item;
      }),
    });
    var itemDinLocalStorage = localStorage.getItem("ItemsinLocalStorage");
    console.log("itemDinLocalStorage", JSON.parse(itemDinLocalStorage));
    console.log(
      "itemul de modificat",
      JSON.parse(itemDinLocalStorage).toDoItems.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      })
    );
    var pd = JSON.parse(itemDinLocalStorage).toDoItems.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    console.log("pd este", pd);
    localStorage.setItem(
      "ItemsinLocalStorage",
      JSON.stringify({ toDoItems: pd })
    );
  };
  addToDo = (title) => {
    const newToDo = {
      id: Math.random() * 10000,
      title: title,
      done: false,
      show: false,
    };
    this.setState({ toDoItems: [...this.state.toDoItems, newToDo] });
    localStorage.setItem(
      "ItemsinLocalStorage",
      JSON.stringify({ toDoItems: [...this.state.toDoItems, newToDo] })
    );
  };
  delToDo = (id) => {
    this.setState({
      toDoItems: [...this.state.toDoItems.filter((item) => item.id !== id)],
    });
    localStorage.setItem(
      "ItemsinLocalStorage",
      JSON.stringify({
        toDoItems: [...this.state.toDoItems.filter((item) => item.id !== id)],
      })
    );
  };

  ShowItemCard = (id) => {
    this.setState({
      toDoItems: this.state.toDoItems.map((item) => {
        if (item.id === id) {
          item.show = !item.show;
          console.log(item);
        }
        return item;
      }),
    });
    var itemDinLocalStorage = localStorage.getItem("ItemsinLocalStorage");
    console.log("itemDinLocalStorage", JSON.parse(itemDinLocalStorage));
    console.log(
      "itemul de modificat",
      JSON.parse(itemDinLocalStorage).toDoItems.map((item) => {
        if (item.id === id) {
          item.show = !item.show;
        }
        return item;
      })
    );
    var pd = JSON.parse(itemDinLocalStorage).toDoItems.map((item) => {
      if (item.id === id) {
        item.show = !item.show;
      }
      return item;
    });
    console.log("pd este", pd);
    localStorage.setItem(
      "ItemsinLocalStorage",
      JSON.stringify({ toDoItems: pd })
    );
  };

  render() {
    var tasks = {
      inProgress: [],
      Done: [],
    };
    this.state.toDoItems.forEach((task) => {
      if (task.done === false) {
        tasks.inProgress.push(
          <div
            key={task.id}
            className="draggable"
            style={{ backgroundColor: "red" }}
            draggable
          >
            {task.title}
          </div>
        );
      } else {
        tasks.Done.push(
          <div
            key={task.id}
            className="draggable"
            style={{ backgroundColor: "green" }}
            draggable
          >
            {task.title}
          </div>
        );
      }
    });
    const dragHandlers = {
      handleStart: this.handleStart,
      handleStop: this.handleStop,
    };
    const { deltaPosition, controlledPosition } = this.state;
    return (
      <div className="App" id="app">
        <Header key={Math.random() * 10000} />
        <AddToDo key={Math.random() * 10000} addToDo={this.addToDo} />
        <ToDoList
          id="listID"
          markComplete={this.markComplete}
          key={Math.random() * 10000}
          todoItems={this.state.toDoItems}
          delToDo={this.delToDo}
          ShowItemCard={this.ShowItemCard}
        />
        <Draggable
          handle=".drag,.dragg2"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <div className="draggableDiv" draggable>
            <div
              draggable
              className="dragg2"
              style={{
                minHeight: "300px",
                width: "300px",
                float: "right",
                margin: "20px",
              }}
            >
              <span>In Progress</span>
              {tasks.inProgress}
            </div>
            <div
              draggable
              className="drag"
              style={{
                minHeight: "300px",
                width: "300px",
                float: "left",
                marginRight: "50px",
                margin: "20px",
              }}
            >
              <span>Done</span>
              {tasks.Done}
            </div>
          </div>
        </Draggable>
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
