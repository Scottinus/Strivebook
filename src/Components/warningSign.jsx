import React, { Component } from 'react';
import {Alert} from "reactstrap";
class Warn extends Component {
   // constructor(props) {
     //   super(props);
        //this.state = {  };
    
    render() {
        return (
            <Alert color="danger">
           {this.props.name}
          </Alert>
          
        );
    }
}
export default Warn;
