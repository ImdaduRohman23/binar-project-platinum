import React, { useState } from 'react';
import './register.css';
import loginBanner from '../../assets/loginBanner.svg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [nama, setNama] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: 'post',
            url: 'https://bootcamp-rent-cars.herokuapp.com/customer/auth/register',
            data: {
            email: email,
            password: password,
            role: 'Customer'
            }
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
        navigate('/login');
        setEmail('');
        setPasword('');
        setNama('');
    }

    return (
        <div className='login'>
            <div className="login__form">
                <Form onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>
                    <Form.Group className="mb-3" controlId="formBasicnama">
                        <Form.Label>Nama*</Form.Label>
                        <Form.Control value={nama} type="text" placeholder="Nama Lengkap" onChange={(e) => setNama(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email*</Form.Label>
                        <Form.Control value={email} type="email" placeholder="Contoh: johndee@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Create Password*</Form.Label>
                        <Form.Control value={password} type="password" placeholder="Password"  onChange={(e) => setPasword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p className='form__bawah'>Already have an account? <Link to='/login' > Sign In here
                </Link></p>
            </div>
            <div className="login__img">
                <img src={loginBanner} alt="" />
            </div>
        </div>
    )
}

export default Register
