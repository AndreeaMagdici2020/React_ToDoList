import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ToDoList from "./Components/ToDoList/ToDoList";
import AddToDo from "./Components/ToDoList/AddToDo";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    toDoItems: [
      {
        id: Math.random() * 1000000,
        title: "cook dinner",
        done: false,
        show: false,
        date: "",
      },
      {
        id: Math.random() * 1000000,
        title: "clean house",
        done: false,
        show: false,
        date: "",
      },
      {
        id: Math.random() * 1000000,
        title: "watch Kdrama",
        done: false,
        show: false,
        date: "",
      },
    ],
  };

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
      date: "",
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
            <span> {task.title} </span>
          </div>
        );
      } else {
        tasks.Done.push(
          <div
            key={task.id}
            className="draggable"
            style={{ backgroundColor: "#d4eee2", maxWidth: "200px" }}
            draggable
          >
            <span>{task.title}</span>
          </div>
        );
      }
    });

    // const { deltaPosition, controlledPosition } = this.state;
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
      </div>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
