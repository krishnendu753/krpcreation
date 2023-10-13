import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Forgotpassword({ handleChangeForgot, dataForgot, onReturn, signUpData, submitDataForgot, resetDataForgot }) {
    return (
        <div>
            <Container>
                <h3>Forgot Password</h3>
                <Row className="justify-content-md-center">
                    <Col xs={4}>
                        <Form className="formStyle">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={dataForgot.forgotEmail} onChange={handleChangeForgot} name='forgotEmail' type="text" placeholder="Enter email" />
                            </Form.Group>
                        </Form>
                        <div className='buttonSection'>
                            <Button className='allButtonForgotPassword' variant="primary" type="button" onClick={submitDataForgot}>
                                Submit
                            </Button>
                            <Button className='allButtonForgotPassword' variant="warning" type="button" onClick={onReturn}>
                                Back to signin
                            </Button>
                            <Button className='allButtonForgotPassword' variant="success" type="button" onClick={signUpData}>
                                Back to signup
                            </Button>
                            <Button className='allButtonForgotPassword' variant="danger" type="button" onClick={resetDataForgot}>
                                Reset
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Forgotpassword;