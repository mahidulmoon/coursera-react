import React, { Component } from 'react';

class Counter extends Component {
    state = {
        // count: this.props.value,
        // imageUrl: 'https://picsum.photos/200',
        // tags: ['tag1','tag2','tag3']
    };
    
    styles = {
        fontSize : 10,
        fontWeight : "bold"
    };
    constructor(props){
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleIncrement1(){
        console.log("increment Clicked",this.state.count);
        
    }
    doHandleIncrement = () =>{
        this.handleIncrement({id:1});
    }

    handleIncrement = (product) =>{
        //console.log("increment Clicked",this.state.count);
        console.log(product);
        this.setState({count: this.state.count+1});
    }
    render() {
        //let classes = this.getBadgeClasses();
        
        return (
            <div className="row">
                {/* <img src={this.state.imageUrl} alt="" /> */}
                {this.props.children}
                <div className="col-1">
                    <span  className="badge badge-primary m-2">{this.props.counter.value}</span>
                </div>
                <div className="col">
                    <button onClick={()=>this.props.onIncrement(this.props.counter)} className={this.getBadgeClasses()}>+</button>
                    <button onClick={()=>this.props.onDecrement(this.props.counter)} className={this.getBadgeClasses()}>-</button>
                    <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn-danger btn-sm m-2">Delete</button>
                </div>
                {/* <button onClick={this.doHandleIncrement} className={this.getBadgeClasses()}>Increment</button> */
                
                /* {this.state.tags.length !== 0 && 
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
                </ul>} */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;