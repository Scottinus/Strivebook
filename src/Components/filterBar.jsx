import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, fas} from '@fortawesome/free-solid-svg-icons';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import Rating from 'react-rating';
import { far} from '@fortawesome/free-regular-svg-icons'
import {Label, Input,} from 'reactstrap';

library.add(fas)
icon(far.faStar);

export default class FilterBar extends React.Component {
   
  render() {
    return (
      <div id="custom-filter" className="fixed-top pl-2">
        <p> <strong>Filtery by</strong></p>
        {/* CREARE FORM PER ACQUISIRE TUTTE LE INFORMAZIONI */}

        <Nav vertical>
          <NavItem>
            <div className="star-container mb-3">
            <p>Review</p>
            <Rating
             initialRating={5}
             readonly
  emptySymbol={
    <FontAwesomeIcon  icon={far.faStar}/>
}
  fullSymbol={
    <FontAwesomeIcon icon={faStar}/>
  }
  fractions={2}
/>
<Rating
             initialRating={4}
             readonly
  emptySymbol={
    <FontAwesomeIcon  icon={far.faStar}/>
}
  fullSymbol={
    <FontAwesomeIcon icon={faStar}/>
  }
  fractions={2}
/>
<Rating
             initialRating={3}
             readonly
  emptySymbol={
    <FontAwesomeIcon  icon={far.faStar}/>
}
  fullSymbol={
    <FontAwesomeIcon icon={faStar}/>
  }
  fractions={2}
/>
<Rating
             initialRating={2}
             readonly
  emptySymbol={
    <FontAwesomeIcon  icon={far.faStar}/>
}
  fullSymbol={
    <FontAwesomeIcon icon={faStar}/>
  }
  fractions={2}
/>
<Rating
             initialRating={1}
             readonly
  emptySymbol={
    <FontAwesomeIcon  icon={far.faStar}/>
}
  fullSymbol={
    <FontAwesomeIcon icon={faStar}/>
  }
  fractions={2}
/>
            </div>

          </NavItem>
          <NavItem>
            <p>language</p>
            <div className="star-container mb-3 ml-3">
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Italian
            </Label>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              English
            </Label>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Espanol
            </Label>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Detusch
            </Label>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
             French
            </Label>
            </div>
          </NavItem>
          <NavItem>
            <p>Format</p>
          </NavItem>
          <NavItem>
            <NavLink>Paperback</NavLink>
            <NavLink>Hardcover</NavLink>
            <NavLink>Kindle</NavLink>
            <NavLink>Calendar</NavLink>
            <NavLink>Oversized</NavLink>
          </NavItem>
          
        </Nav>
        <hr />
        <p>Problems? Contact us</p>
        <Nav vertical>
          <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
        </Nav>
      </div>
    );
  }
}
