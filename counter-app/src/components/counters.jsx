import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state={
        counters:[
            {id:1,value:0},
            {id:2,value:4},
            {id:3,value:0}
        ]
    }
    render() {
        return (
            <div className="ajaira">
                {this.state.counters.map(counter => 
                <Counter key={counter.id} value={counter.value} selected={true} ><h4>Cournter #{counter.id}</h4></Counter>)}
            </div>
        );
    }
}

export default Counters;