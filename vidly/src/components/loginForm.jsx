import React, { Component } from 'react';
import Input from './common/input';
export default class LoginForm extends Component {
    state={
        account: {
            username:'',
            password:''
        },
        errors: {}

    };
    validate = () =>{
        const errors = {};
        
        const {account} = this.state;
        if (account.username.trim() === '')
            errors.username = 'Username is required' ; 
        if (account.password.trim() === '')
            errors.password = 'password is required' ; 

        return Object.keys(errors).length === 0 ? null : errors;
    };
    handleSubmit = e =>{
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors });
        if (errors) return;
    };

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
            <form onSubmit={this.handleSubmit}>
                    
                <Input name="username" value={account.username} label="Username" error={this.state.errors.username} onChange={this.handleChange} />
                <Input name="password" value={account.password} label="Password" error={this.state.errors.password} onChange={this.handleChange} />

                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    );
  }
}
