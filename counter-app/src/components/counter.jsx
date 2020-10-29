import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };
    formatcount(){
        const {count} = this.state;
        const z = <h1>Zero</h1>;
        return count === 0 ? z : count;
    };
    styles = {
        fontSize : 10,
        fontWeight : "bold"
    };
    render() {
        return (
            <>
                <img src={this.state.imageUrl} alt="" />
                <span style={this.styles} className="badge badge-primary m-2">{this.formatcount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </>
        );
    }
}

export default Counter;