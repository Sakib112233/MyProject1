import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import dota2Logo from '../../asset/image/Dota2.png'
import pLogo from '../../asset/image/Pubg.png'
import graphicLogo from '../../asset/image/Grapicicon.png'
import webLogo from '../../asset/image/Webicon.png'
import mobileLogo from '../../asset/image/Mobileicon.png'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle"> MY SERVICES</h1>
                  <Row>
                      <Col lg={4} md={6} sm={12}>
                          <div className="serviceCard text-center">
                              <img src={dota2Logo}/>
                              <h2 className="serviceName">Dota 2</h2>
                              <p className="serviceDescription">I am helping noob player, who doesn't know how to play dota 2. I am tring make them pro player.</p>

                          </div>
                      </Col>
                      <Col lg={4} md={6} sm={12}>
                          <div className="serviceCard text-center">
                              <img src={pLogo}/>
                              <h2 className="serviceName">Pubg</h2>
                              <p className="serviceDescription">I am helping noob player, who doesn't know how to play pubg. I am tring make them pro player.</p>

                          </div>
                      </Col>
                      <Col lg={4} md={6} sm={12}>
                          <div className="serviceCard text-center">
                              <img src={webLogo}/>
                              <h2 className="serviceName">Web Development</h2>
                              <p className="serviceDescription">I am a web developer.I don't know how to make a website.</p>

                          </div>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                          <div className="serviceCard text-center">
                              <img src={mobileLogo}/>
                              <h2 className="serviceName">Mobile Development</h2>
                              <p className="serviceDescription">i am also a mobile developer.I don't know about native react.</p>

                          </div>
                      </Col>

                      <Col lg={4} md={6} sm={12}>
                          <div className="serviceCard text-center">
                              <img src={graphicLogo}/>
                              <h2 className="serviceName">Graphic Design</h2>
                              <p className="serviceDescription">what is graphic design,i really don't know about graphic design</p>

                          </div>
                      </Col>

                  </Row>


                </Container>
            </Fragment>
        );
    }
}

export default Services;