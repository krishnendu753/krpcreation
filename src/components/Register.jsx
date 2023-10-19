import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

function Register({ onReturn }) {
    function saveSignUpData() {

    }
    function resetSignUpData() {

    }
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 4, offset: 4 }} className="register-bodyContain">
                        <h3>Sign Up</h3>
                        <Scrollbars style={{ height: 295 }}>
                            <Form className="formStyle">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea" rows={3} name='address' type="text" placeholder="Enter address" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control name='phNo' type='number' placeholder="Enter Phone No." />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Gender</Form.Label>
                                    <div className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Male"
                                            name="group1"
                                            type='radio'
                                            id="male"
                                        />
                                        <Form.Check
                                            inline
                                            label="Female"
                                            name="group1"
                                            type='radio'
                                            id="female"
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select state</option>
                                        <option value="Westbengal">West Bengal</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Gujrat">Gujrat</option>
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                        </Scrollbars>
                        <div className='buttonSection'>
                            <Button className='allButton' variant="primary" type="button" onClick={saveSignUpData}>
                                Save
                            </Button>
                            {/* <Button className='allButton' variant="danger" type="button" onClick={resetSignUpData}>
                                Reset
                            </Button>
                            <Button className='allButton' variant="warning" type="button" onClick={onReturn}>
                                Back To SignIn
                            </Button> */}
                        </div>
                        <div className="mt-3 text-center">
                            <a href="#" onClick={onReturn}>Back To SignIn</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;