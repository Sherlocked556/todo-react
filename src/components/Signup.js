import React from 'react'

class Signup extends React.Component
{   state={}
    handleSubmit=(event)=>
    {   event.preventDefault();
        this.props.getParams(this.state)
        
    }

    render()
    {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Email</label>
                    <input type="text" placeholder="email" name="username" onChange={(event)=>{this.setState({[event.target.name]:event.target.value})}}/>
                    </div>
                    <div className="field">
                    <label>Password</label>
                    <input type="password" placeholder="password" name="password" onChange={(event)=>{this.setState({[event.target.name]:event.target.value})}} />
                    </div>
                    <div className="field">
                    <button type="submit" className="ui red button large"> submit</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default Signup