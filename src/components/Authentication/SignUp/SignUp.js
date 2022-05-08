import React from 'react';
import { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const nameRef = useRef('')
    const emailRef = useRef('');
    const passRef = useRef('');

    if (loading || updating) {
        return <Button variant="light" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/')
    }

    return (
        <Form onSubmit={handleSubmit} className="form-box shadow-lg mb-5 rounded">
            <h1 className='text-warning'>Sign Up</h1>
            <Form.Group className="mb-3 text-start" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passRef} type="password" placeholder="Password" required />
            </Form.Group>

            <input className="btn text-dark fw-bold form-submit" type="submit" value="Sign Up" />

            <br />
            <br />
            <p>
                Already Registered ? <Link className='form-link' to="/login">Login Now</Link>
            </p>

            <SocialLogin></SocialLogin>

        </Form>
    );
};

export default SignUp;
