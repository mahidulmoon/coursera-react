import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };
    formatcount(){
        const {count} = this.state;
        const z = <h1>Zero</h1>;
        return count === 0 ? z : count;
    }
    render() {
        return (
            <>
                <span>{this.formatcount()}</span>
                <button>Increment</button>
            </>
        );
    }
}

export default Counter;