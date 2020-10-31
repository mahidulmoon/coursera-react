import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    
    render() {
        return (
            <div >
                <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map(counter => 
                <Counter key={counter.id} counter={counter} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} ><h4>Cournter #{counter.id}</h4></Counter>)}
            </div>
        );
    }
}

export default Counters;