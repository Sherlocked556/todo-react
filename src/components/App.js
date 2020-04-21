import React from "react";
import todo from '../api/todo'
import Signup from "./Signup";
import Listing from "./List"
class App extends React.Component {
  state={User:{},logged:false,error:""};

    handleParams= async (term)=> {
    
    var data = {
      username: term.username,
      password: term.password,
    };
    const response = await todo.post(
      term.url,
      data
    ); 
      this.setState({User:response.data})
      if(response.data.username)
      {
        this.setState({logged:true})
      }
      else
      {
        this.setState({error:this.state.User.toString()})
      }
      
  }
  render() {
    if(!this.state.logged)
    {return (
      <div className="ui centered card" style={{ margin: "200px auto" }}>
        <h1><center>Welcome to Todo</center></h1>
        
        <Signup getParams={this.handleParams} />
        <h4 style={{color:"red"}}>{this.state.error}</h4>
        
      </div>
    );
    }
    else
    {
      return (
        <div className="ui centered card" style={{ margin: "200px auto" }}>
         <Listing user={this.state.User}/>
        </div>
      );
    }
  }
}

export default App;
