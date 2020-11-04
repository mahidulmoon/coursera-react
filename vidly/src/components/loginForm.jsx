import React, { Component } from 'react';

export default class LoginForm extends Component {
    state={
        account: {
            username:'',
            password:''
        },

    };
    username = React.createRef();

    // componentDidMount(){
    //     this.username.current.focus();
    // }

    handleSubmit = e =>{
        e.preventDefault();
        const username = this.username.current.value;
    }

    handleChange = e =>{
        const account = {...this.state.account};
        account.username = e.currentTarget.value;
        this.setState({account});
    };

    render() {
        return (
        <div>
            <h1>Login</h1>
            <form onSubmit={this,this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input autoFocus ref={this.username} onChange={this.handleChange} value={this.state.account.username} id="username" type="text" className="from-consol"/>
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.account.password} id="password" type="text" className="from-consol"/>
                    </div>
                    <button className="btn btn-primary">Login</button>
            </form>
        </div>
    );
  }
}
