import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon, Button, Grid, Row, Col, ButtonGroup,
DropdownButton, Jumbotron} from 'react-bootstrap';
import './index.css';


class Aframe extends React.Component {
  render () {
    return(
      <div>
        <Scene>
            <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
            <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
            <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="FFC65D"></a-cylinder>
            <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
            <a-sky color="#ECECEC"></a-sky>
        </Scene>
      </div>
    );
  }
}

class App extends React.Component {
  
  render () {
    return (
      <div>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Glyphicon glyph="menu-left"/>
              </Navbar.Brand>
            </Navbar.Header>
          </Navbar>
        </div>
        <Aframe />
      </div>
    );
  }
}

class LandingPage extends React.Component {
  render(){
    const startBtn =  {backgroundColor: '#000000',
                       color: '#ffffff'};

    return(
      <Grid className="center-div">
        <Row>
          <Col xs={12} md={8}><h1 className="text-center">AODA Call for Action</h1></Col>
        </Row>
        <Row>
          <Col xs={12} md={8}><h4 className="text-center">Enabling Change</h4></Col>
        </Row>
        <Row>
          <Col xs={10} md={6}>
            <ButtonGroup justified>
              <DropdownButton title="Choose your scene" id="bg-nested-dropdown">
                <MenuItem eventKey="1">Office Space</MenuItem>
                <MenuItem eventKey="2">Restaurant</MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </Col>
          <Col xs={6} md={4}>
            <Button style={startBtn}>Start</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

class TestClass extends React.Component {
  render(){
    return(
      <Jumbotron className="center-div">
        <h1> AODA Call for Action</h1>
        <p> Enabling Change</p>
        <Grid>
          <Row>
            <Col xs={6} md={4}>Menu</Col>
            <Col xs={6} md={4}>
              <Button>Start</Button>
            </Col>
          </Row>
        </Grid>
      </Jumbotron>
    );
  }
}

ReactDOM.render(<LandingPage/>, document.querySelector('#sceneContainer'));
