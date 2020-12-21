import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody,CardImg, CardGroup, Col, Container, Form, Input, InputGroup,  InputGroupText, Row } from 'reactstrap';
import './login.css';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      username:'error',
      password:'error',
      isLoggedIn:false,
      }
  }
  render() {
    return (
      <div className="app flex-row align-items-center filkom-login" >
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
              <Card className="text-white bg-primary py-5 d-md-down-none" style={{ flex: "0 0 36%" }}>
              <CardImg className="card-logo" src={'../../assets/img/logologin.png'} alt="Logo AMF-HAQ" />
              <CardBody className="text-center">
                    <div>
                      <h2>AMF-HAQ</h2>
                      <p>Finance Accounting dan Human Resource Development</p>
                      
                    </div>
                  </CardBody>
                </Card>
                <Card className="p-4 bg-lightgray">
                  <CardBody>
                    <Form>
                      <h1 className="text-center">Login</h1>
                      <p className="text-muted text-center">Sign In to your account</p>
                      <InputGroup className="mb-3">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        <Input type="text" placeholder="Username" onChange={(e) =>this.setState({username:e.target.value})} required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        
                        <Input type="password" placeholder="Password" onChange={(e) =>this.setState({password:e.target.value})} required />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                        <Link to={ `/auth/login/${this.state.username}&&${this.state.password}` }>
                            <Button color="dark" className="px-4">Login</Button>
                          </Link>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link-dark" className="px-0">Lupa password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default 
(Login);