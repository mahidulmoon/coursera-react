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
    handleReset = () =>{
        const counters = this.state.counters.map(c => {
            c.value = 0 ;
            return c;
        });
        this.setState({counters});
    }
    onIncrement = (counter) =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }
    render() {
        return (
            <div >
                <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset</button>
                {this.state.counters.map(counter => 
                <Counter key={counter.id} counter={counter} onIncrement={this.onIncrement} onDelete={this.handleDelete} ><h4>Cournter #{counter.id}</h4></Counter>)}
            </div>
        );
    }
}

export default Counters;