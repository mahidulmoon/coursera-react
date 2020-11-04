import React, { Component } from 'react';
import Input from './common/input';
export default class LoginForm extends Component {
    state={
        account: {
            username:'',
            password:''
        },

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
            <form>
                    
                <Input name="username" value={account.username} label="Username" onChange={this.handleChange} />
                <Input name="password" value={account.password} label="Password" onChange={this.handleChange} />

                <button className="btn btn-primary">Login</button>
            </form>
        </div>
    );
  }
}
