import React from 'react';
import './login.css';
import loginBanner from '../../assets/loginBanner.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <div className="login__form">
                <Form>
                    <h3>Welcome Back!</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
                <p className='form__bawah'>Don’t have an account? <Link> Sign Up for free
                </Link></p>
            </div>
            <div className="login__img">
                <img src={loginBanner} alt="" />
            </div>
        </div>
    )
}

export default Login
