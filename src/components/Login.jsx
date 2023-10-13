import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Login({ handleChange, checkHandleChange, submitData, resetData, signUpData, forgotPassword, data, checkData }) {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={4} className="login-contain">
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

                    <div className="d-flex justify-content-between">
                        <Button className="allButton" variant="primary" type="button" onClick={submitData}>
                            Sign In
                        </Button>
                        <Button className="allButton" variant="warning" type="button" onClick={signUpData}>
                            Sign Up
                        </Button>
                        <Button className="allButton" variant="danger" type="button" onClick={resetData}>
                            Reset
                        </Button>
                    </div>
                    <div className="mt-3 text-center">
                        <a href="#" onClick={forgotPassword}>Forgot Password</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;