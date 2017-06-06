import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon, Button} from 'react-bootstrap';


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
    document.body.style.backgroundColor = "#EEF6FC";
    return(
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div>centered content</div>
      </div>
    );
  }
}


ReactDOM.render(<LandingPage />, document.querySelector('#sceneContainer'));
