import React, {Component} from 'react';
import '../App.css';
import ReactWebChat from 'botframework-webchat';
import logo from '../resource/KPMGlogo2.jpg'
import * as ReactBootStrap from 'react-bootstrap';
import {createDirectLine} from "botframework-webchat/lib";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import botAvatar from '../resource/Bot-IMG.png';



const Home= () => {
    const myToken = 'jx-n0cBNB1k.ByZKqNYxBJPxEHAVhSt1zBuitgd2P4tTSEa7pI6zRHM';

    var directLineUser = {
        id: 'user-id',
        name: 'user name',
    }
    const directLine3 = createDirectLine({token: myToken, user: directLineUser});


    const styleOptions = {
        botAvatarImg : botAvatar,
        botAvatarInitials: 'BOT',
        userAvatarInitials: 'US',
        hideUploadButton: true,
    }

    const homeButtonStyle = {
        fontFamily : "Noto Sans CJK",
        fontSize: 20,
    }



    return (
        <Row>
            <Col style={{backgroundColor: '#0091DA'}}></Col>
            <Col xl={8} style={{padding: 0}}>
                <div>

                    <div style={{height: 200}}>

                        <ReactBootStrap.Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#00338D'}}>

                            <ReactBootStrap.Nav.Link  href="#Home" style={homeButtonStyle}>
                                KPMG Chatbot
                            </ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                                <ReactBootStrap.Nav className="mr-auto">

                                </ReactBootStrap.Nav>
                                <ReactBootStrap.Nav>


                                    <ReactBootStrap.Navbar.Brand href="#brand">
                                        <img
                                            src={logo}
                                            width="70"
                                            height="50"
                                            className="d-inline-block align-top"
                                            alt=" "
                                            style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
                                        ></img>
                                    </ReactBootStrap.Navbar.Brand>
                                </ReactBootStrap.Nav>
                            </ReactBootStrap.Navbar.Collapse>
                        </ReactBootStrap.Navbar>


                    </div>


                    <div style={{height: 720}}>
                        <ReactWebChat directLine={directLine3} bot={{id: 'bot-id', name: 'bot-name'}}
                                      user={{id: 'user-id', name: 'user name'}} preSend={sendWelcome()} before={alert()}
                                      resize="detect" styleOptions={styleOptions} />
                    </div>


                </div>
            </Col>
            <Col style={{backgroundColor: '#0091DA'}}></Col>
        </Row>

    );
    function sendWelcome() {
        directLine3.postActivity({
            from: directLineUser,
            name: 'directline/join',
            type: 'event',
            value: ''
        }).subscribe(function () {
            console.log("trigger requestWelcomeDialog");
        })

    }
    function alert(){
        console.log("sent to server");
    }
}

export default Home;

