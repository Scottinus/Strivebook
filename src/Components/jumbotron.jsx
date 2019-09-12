import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const JumbBook = (props) => {
  return (
    <div>
      <Jumbotron className ="jumb">
        <h1 className="display-3">The Witcher Saga</h1>
        <p className="lead">Read the books before the Netflix Series!</p>
        <hr className="my-2" />
        <p>Special offers <strong>50% on all books</strong></p>
        <p className="lead">
          <Button color="danger">See More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbBook;
