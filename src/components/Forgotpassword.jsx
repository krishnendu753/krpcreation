import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Forgotpassword({ handleChangeForgot, dataForgot, onReturn, signUpData, submitDataForgot, resetDataForgot }) {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 4, offset: 4 }} className="forgotPass-bodyContain">
                        <h3 className="text-center mb-4">Forgot Password</h3>
                        <Form className="formStyle">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={dataForgot.forgotEmail} onChange={handleChangeForgot} name='forgotEmail' type="text" placeholder="Enter email" />
                            </Form.Group>
                        </Form>
                        <div  className="buttonSection">
                            <Button className='allButton' variant="primary" type="button" onClick={submitDataForgot}>
                                Submit
                            </Button>
                            {/* <Button className='allButton' variant="warning" type="button" onClick={onReturn}>
                                Back to signin
                            </Button>
                            <Button className='allButton' variant="success" type="button" onClick={signUpData}>
                                Back to signup
                            </Button>
                            <Button className='allButton' variant="danger" type="button" onClick={resetDataForgot}>
                                Reset
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

export default Forgotpassword;