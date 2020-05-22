import React, {useMemo} from 'react';
import './App.css';
import ReactWebChat from 'botframework-webchat';
import {DirectLine} from 'botframework-directlinejs';
import * as ReactBootStrap from 'react-bootstrap';
import {createDirectLine} from "botframework-webchat/lib";




//credentials used to connect to Azure Bot
const UID  = 'chatbot-9e18';
const myToken = 'jx-n0cBNB1k.ByZKqNYxBJPxEHAVhSt1zBuitgd2P4tTSEa7pI6zRHM';




 function App() {

     const mydirectLine  = useMemo(() => createDirectLine({token: myToken}),[]);

   return (
      <div>

        <div style={{height:200}}>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                <ReactBootStrap.Navbar.Brand href="#home"  >
                    <img
                        src={require("C:\\Users\\quangtienvu\\WebstormProjects\\ChatApp\\src\\resource\\KPMGlogo.png")}
                        width="70"
                        height="50"
                        className="d-inline-block align-top"
                        alt=" "
                   ></img>
                </ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">
                        <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Divider />
                            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown>
                    </ReactBootStrap.Nav>
                    <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link href="#deets">Dev Team</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
                            Big Project
                        </ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>

        </div>


          <div style={{height: 500}}>
              <ReactWebChat directLine={mydirectLine} userID={'tien'} />
          </div>


      </div>
  );
}


export default App;

