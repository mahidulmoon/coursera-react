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
    handleDelete = (counterId) =>{
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }
    render() {
        return (
            <div >
                {this.state.counters.map(counter => 
                <Counter key={counter.id} value={counter.value} cid={counter.id} onDelete={this.handleDelete} ><h4>Cournter #{counter.id}</h4></Counter>)}
            </div>
        );
    }
}

export default Counters;