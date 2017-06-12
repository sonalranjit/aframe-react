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

class AodaPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {isAframe: false};
    this.showFrame = this.showFrame.bind(this);
  }
  showFrame(){
    this.setState({isAframe: true});
  }
  render(){
    const isAframe = this.state.isAframe;
    return(
      <div>
        <ViewRenderer isAframe={isAframe} showFrame={this.showFrame}/>
      </div>
    );
  }
}

class JumbotronPage extends React.Component{
  render(){
    return(
      <Jumbotron>
        <h1>Hello, World</h1>
        <p> This is a simple hero unit, a simple jumbotron-styple component</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
      </Jumbotron>
    );
  }
}

function ViewRenderer(props){
  const isAframe = props.isAframe;
  if(isAframe){
    return <AframeNavbar />;
  }else{
    return <LandingPage onClick={props.showFrame}/>;
  }
}

function StartButton(props){
  const startBtn =  {backgroundColor: '#000000',
                       color: '#ffffff'};
  return(
    <Button style={startBtn} onClick={props.onClick}>Start</Button>
    );
}

function LandingPage(props){
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
          <StartButton onClick={props.onClick}>Start</StartButton>
        </Col>
      </Row>
    </Grid>
  ); 
}

function Aframe(){
  return(
    <Scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </Scene>
  );
}

function AframeNavbar(){
  return(
    <div>
    <Scene>
      <a-assets>
        <a-asset-item id="officeroom-obj" src="models/Room01.obj"></a-asset-item>
        <a-asset-item id="officeroom-mtl" src="models/Room01.mtl"></a-asset-item>
      </a-assets>
      <a-entity obj-model="obj: #officeroom-obj; mtl: #officeroom-mtl;" 
        scale="1 1 1"
        rotation="0 0 0"
        position="1 1 1">
      </a-entity>
      <a-sky color="#ECECEC"></a-sky>
      <a-camera><a-cursor></a-cursor></a-camera>
    </Scene>
    <Navbar collapseOnSelect>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1}><Glyphicon glyph="menu-hamburger"/></NavItem>
          <NavItem eventKey={2}><b>AODA Call for Action</b></NavItem>
          <NavItem eventKey={3}>Office Space</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

ReactDOM.render(<AodaPage />, document.querySelector('#sceneContainer'));
