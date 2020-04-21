import React from "react";
import todo from "../api/todo";

class Listing extends React.Component {
  state = {};
  handleDelete = async (num) => {
    const url = "/" + this.props.user._id + "/delete";

    const response = await todo.get(url, {
      params: { pos: num },
    });
    this.setState({ user: response.data });
  };
  handleAdd = async (event) => {
    event.preventDefault();
    const url = "/" + this.props.user._id + "/add";
    const response = await todo.get(url, {
      params: { num: this.state.newtodo, title: this.state.newtodo },
    });
    this.setState({ user: response.data });
  };
  render() {
    var mid = this.props.user.tasks.reverse();
    if (this.state.user) mid = this.state.user.tasks.reverse();

    var tasks = mid.map((task) => {
      return (
        <div className="item" style={{ margin: "20px 20px" }}>
          {task.title}{" "}
          <button
            className="ui red button small right floated"
            onClick={(event) => {
              this.handleDelete(task.num);
            }}
          >
            <i className="trash alternate outline icon"></i>
          </button>
          <hr />
        </div>
      );
    });
    return (
      <div>
        <h1>
          <center>TASKS TODO</center>
        </h1>
        <form className="ui inline form" onSubmit={this.handleAdd}>
          <div className="fields">
            <div className="field">
              <input
                style={{ margin: "0px 10px" }}
                type="text"
                name="newtodo"
                onChange={(event) => {
                  this.setState({ [event.target.name]: event.target.value });
                }}
              />
            </div>
            <div className="field">
              <button type="submit" className="ui button green">
                Add
              </button>
            </div>
          </div>
        </form>
        <br />
        <div className="ui list ">{tasks}</div>
      </div>
    );
  }
}

export default Listing;
