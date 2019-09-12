import React from 'react';
import { Badge } from 'reactstrap';


export default class MyBadge extends React.Component {
  render() {
    return (
      <div>
  <h2 className="mt-4">
  <Badge color ={this.props.color}>
           {this.props.numb}
           </Badge>
    </h2> 
      </div>
    );
  }
}