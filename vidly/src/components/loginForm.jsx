import React, { Component } from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
          <h1>Login</h1>
          <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label><input id="username" type="text" className="from-consol"/>
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
