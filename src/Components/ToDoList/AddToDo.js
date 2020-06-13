import React from "react";
import styles from "./AddToDo.module.css";
class AddToDo extends React.Component {
  state = { title: "" };
  onChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({ title: "" });
  };
  onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      this.onSubmit();
    }
  };
  render() {
    return (
      <div className={styles.addToDo}>
        <form onSubmit={this.onSubmit} className={styles.form}>
          <input
            type="text"
            name="title"
            className={styles.input}
            placeholder="Add things to do"
            onChange={this.onChange}
            onKeyPress={this.onKeyDownHandler}
            value={this.state.value}
          ></input>
          <input className={styles.btn} type="submit" value="➕"></input>
        </form>
      </div>
    );
  }
}
export default AddToDo;
