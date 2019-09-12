import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class InfoNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Router>

      <div>
        <Nav tabs className="custom-nav fixed-top">
        <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Genres
            </DropdownToggle>
            <DropdownMenu className="dropdown-class">
              <DropdownItem>
              <a href="/fantasy" >fantasy</a>
                </DropdownItem>
              <DropdownItem>
              <a href="/horror" >horror</a>
              </DropdownItem>
              <DropdownItem>
              <a href="/romance" >romance</a>
              </DropdownItem>
              <DropdownItem>
              <a href="/history" >history</a>
              </DropdownItem>
              <DropdownItem>
              <a href="/scifi" >scifi</a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink className="float-right" href="/">Log-in | Signup</NavLink>
          </NavItem>
        </Nav>
      </div>
      </Router>
    );
  }
}