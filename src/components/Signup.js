import React from "react";

class Signup extends React.Component {
  state = {};
  handleSubmit = async (method) => {
    
    await this.setState({url:method})
    this.props.getParams(this.state);
    
  };

  render() {
    return (
      <div className="ui container" style={{padding:"5px 5px"}}>
        <form className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              placeholder="email/nickname"
              name="username"
              onChange={(event) => {
                this.setState({ [event.target.name]: event.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={(event) => {
                this.setState({ [event.target.name]: event.target.value });
              }}
            />
          </div>
          <div className="field">
            <button type="submit" className="ui red button large" onClick={(event)=>{event.preventDefault();this.handleSubmit("/signup")}}>
              
              Signup
            </button>
            <button type="submit" className="ui red button large right floated" onClick={(event)=>{event.preventDefault();this.handleSubmit("/login")}}>
              
             Login
            </button>
          
          </div>
          </form>
      </div>
    );
  }
}

export default Signup;
