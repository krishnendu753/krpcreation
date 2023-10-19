import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Login({ moduleView, handleChange, checkHandleChange, submitData, resetData, signUpData, forgotPassword, data, checkData }) {
    return (
        <Container>
            {moduleView ?
                <Row className="justify-content-center">
                    <Col md={{ span: 4, offset: 4 }} className="login-bodyContain">
                        <h3 className="text-center mb-4">Sign In</h3>
                        <Form className="formStyle">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={data.email} onChange={handleChange} name='email' type="text" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={data.password} onChange={handleChange} name='password' placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" checked={checkData} onChange={checkHandleChange} label="Check me out" />
                            </Form.Group>
                        </Form>

                        <div className="buttonSection">
                            <Button className="allButton" variant="primary" type="button" onClick={submitData}>
                                Sign In
                            </Button>
                            {/* <Button className="allButton" variant="danger" type="button" onClick={resetData}>
                                Reset
                            </Button> */}   
                        </div>
                        <div className="mt-3 text-center">
                            <p>New User? <a href="#" onClick={signUpData}>Register Here</a></p>
                            <a href="#" onClick={forgotPassword}>Forgot Password?</a>
                        </div>
                    </Col>
                </Row> : <div></div>}
        </Container>
    );
}

export default Login;