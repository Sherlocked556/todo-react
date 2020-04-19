import React from 'react'
import axios from 'axios'
import Signup from './Signup'
class App extends React.Component
{   handleParams(term)
    {
        console.log(term)
    }
    render()
    {
    return(
        <div className="ui centered card" style={{margin:'200px auto'}}>
        <Signup  getParams={this.handleParams}/> 
        </div>
    )
    }
}


export default App