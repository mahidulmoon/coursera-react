import React, { Component } from 'react';

export default class LoginForm extends Component {
    username = React.createRef();

    // componentDidMount(){
    //     this.username.current.focus();
    // }

    handleSubmit = e =>{
        e.preventDefault();
        const username = this.username.current.value;
    }
    render() {
        return (
        <div>
            <h1>Login</h1>
            <form onSubmit={this,this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label><input autoFocus ref={this.username} id="username" type="text" className="from-consol"/>
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="password">Password</label><input id="password" type="text" className="from-consol"/>
                    </div>
                    <button className="btn btn-primary">Login</button>
            </form>
        </div>
    );
  }
}
