import React from 'react';
import PureComponent from 'react-pure-render/component';
import { Navbar, Nav, NavItem, Input, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';


const { setStartingLocation, setEndingLocation } = ActionCreators;


export class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const value = event.target.value;
  }

  render () {
    return (
      <Navbar brand="WalkSafely" className="navbar navbar-default navbar-fixed-top">
        <form className="navbar-form navbar-right" id="directions" role="search">
          <div className="form-group">
            <Input key="startingLocation" className="form-control" type="text" ref="startingLocation" placeholder="Starting" />
            <Input key="endingLocation" className="form-control" type="text" ref="endingLocation" placeholder="Destination" />
          </div>
          <Button type="submit" className="btn btn-default" id="searchbutton" onChange={this.handleChange} >Find Directions</Button>
        </form>
      </ Navbar>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setStartingLocation, setEndingLocation }, dispatch);
}

export default connect(undefined, mapDispatchToProps)(Header);
