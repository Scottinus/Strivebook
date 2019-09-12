import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Input } from 'reactstrap';

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    ids: "",
    };
    this.state= {
        commentInfo: {
            comment:"I HAD EARTH ATTACK",
            rate: 2,
            elementId: "",
        }

    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  PostComment = async (id)=>{
    var getId = id;
    var obj = this.state.commentInfo;
    obj.elementId = getId;
    console.log(obj);
    var response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/",
    {method: "POST",
    headers: {
        "Content-Type": "application/json",
         "Authorization": " Basic dXNlcjM6blo0dUZkOWhCcDNkdktMdQ=="
    },
    body: JSON.stringify(obj),
 });
     var json = await response.json();
     if(response.ok){
         console.log("è andato tutto bene");
     }else{
         console.log("na merda :" , json.message);
     }
    console.log(json); 
}

  render() {
    return (
      <div>
        <Button asin color="danger" onClick={this.toggle} className="mt-3">+ Comment{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Give us your Opinion</ModalHeader>
          <ModalBody>
          <FormGroup>
          <Label for="exampleText">Write your comment here</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick= {()=> this.PostComment(this.props.asinId)}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


export default AddComment;