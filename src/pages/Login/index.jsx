import React, { useState } from 'react';
import './login.css';
import loginBanner from '../../assets/loginBanner.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from "axios";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: 'post',
            url: 'https://bootcamp-rent-cars.herokuapp.com/customer/auth/login',
            data: {
            email: email,
            password: password
            }
        })
        .then(res => localStorage.setItem('token', res.data.access_token))
        .catch(error => console.log(error))
        setEmail('');
        setPasword('');
    }

    return (
        <div className='login'>
            <div className="login__form">
                <Form onSubmit={handleSubmit}>
                    <h3>Welcome Back!</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} type="email" placeholder="Contoh: johndee@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} type="password" placeholder="Password"  onChange={(e) => setPasword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
                <p className='form__bawah'>Dont have an account? <Link> Sign Up for free
                </Link></p>
            </div>
            <div className="login__img">
                <img src={loginBanner} alt="" />
            </div>
        </div>
    )
}

export default Login
