
import React from "react";

class Example extends React.Component {

    render() {
        return <h2 style={{color:"red"}}>This is a {this.props.type} React component</h2>;
    }  
}

export default Example;

