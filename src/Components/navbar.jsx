import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, InputGroup, InputGroupAddon,Input } from 'reactstrap';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class NavBook extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">StriveBook</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
 {/*          <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">
        <a href="#">
          <FontAwesomeIcon icon={faSearch} size="3x" className="icon-search"/>    
          </a>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup> */}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Log-in SignUp </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Cart
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Fantasy
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Horror
                  </DropdownItem>
                  <DropdownItem>
                    History
                  </DropdownItem>
                  <DropdownItem>
                    Romance
                  </DropdownItem>
                  <DropdownItem>
                    Sci-Fi
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
