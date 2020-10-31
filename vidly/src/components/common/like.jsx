import React, { Component } from 'react';

class Like extends Component {
    render() {
        let classes = "fa fa-heart";
        if(!this.props.liked) classes += "-o";
        return (
            <div>
                <i onClick={this.props.onClick} style={{cursor: 'pointer'}} className={classes} aria-hidden="true" />
            </div>
        );
    }
}

export default Like;