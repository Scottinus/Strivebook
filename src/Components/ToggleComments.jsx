import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import {Badge, ListGroup, ListGroupItem} from 'reactstrap';
import AddComment from './ModalComment';
class GetB extends React.Component{
    constructor(props){
        super(props);
       /*  this.toggle = this.toggle.bind(this); */
        this.state = {
             collapse: false,  
             idToggle: ""      
        };

    }
    toggle = () => {
        this.setState(state => ({ collapse: !state.collapse }));
      }

        render(){
            return (
                    <>
                <div className="mt-3">
        <Button color="danger" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
        <h6>Comments <Badge color="dark" className="ml-2 mt-2">{this.props.numbComments}</Badge></h6>
            </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            {this.state.idToggle}
             {this.props.comments != undefined && this.props.comments.map(comment => 
                <ListGroup>
                   <ListGroupItem>
                       {comment.comment}
                       </ListGroupItem> 
                </ListGroup>
                )}
                 <AddComment asinId ={this.props.idToggle}
                                asin= {this.props.idToggle}
                 />
            </CardBody>
          </Card>
        </Collapse>
      </div>
                    </>
            );
    
        }
        
    }
    
    export default GetB;