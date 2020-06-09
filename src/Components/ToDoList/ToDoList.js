import React from "react";
import ToDoItem from "./ToDoItem";
class ToDoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todoItems.map((item) => (
          <ToDoItem
            key={Math.random() * 10000}
            todo={item}
            id={item.id}
            checked={item.done}
            markComplete={this.props.markComplete}
            delToDo={this.props.delToDo}
          />
        ))}
      </div>
    );
  }
}

export default ToDoList;
