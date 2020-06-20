import React from "react";
import ToDoItem from "./ToDoItem";
class ToDoList extends React.Component {
  render() {
    return (
      <div className="toDoList">
        {this.props.todoItems.map((item) => (
          <ToDoItem
            key={Math.random() * 10000}
            todo={item}
            id={item.id}
            checked={item.done}
            markComplete={this.props.markComplete}
            delToDo={this.props.delToDo}
            ShowItemCard={this.props.ShowItemCard}
          />
        ))}
      </div>
    );
  }
}

export default ToDoList;
