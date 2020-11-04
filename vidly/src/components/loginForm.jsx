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

    handleChange = ({ currentTarget: input }) =>{
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    };

    render() {
        const { account } = this.state;
        return (
        <div>
            <h1>Login</h1>
            <form onSubmit={this,this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input autoFocus ref={this.username} name="username" onChange={this.handleChange} value={account.username} id="username" type="text" className="from-consol"/>
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={account.password} name="password" onChange={this.handleChange} value={account.password} id="password" type="text" className="from-consol"/>
                    </div>
                    <button className="btn btn-primary">Login</button>
            </form>
        </div>
    );
  }
}
