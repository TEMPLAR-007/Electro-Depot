import React from 'react';
import { useRef } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const emailRef = useRef('');
    const passRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    if (user) {
        // navigate(from, { replace: true });
    }

    if (loading || sending) {
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

    let errorMsg;
    if (error) {

        errorMsg = <p className='text-danger'>Error: {error?.message}</p>
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

        await signInWithEmailAndPassword(email, password);

        fetch("https://fathomless-plateau-74593.herokuapp.com//login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
            .then((res) => res.json())
            .then((data) => {
                const token = data.accessToken;
                localStorage.setItem('accessToken', token);
                navigate(from, { replace: true });
            });



    };

    const handleResetPass = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email')
        }
    }

    return (
        <Form onSubmit={handleSubmit} className="form-box shadow-lg mb-5 rounded">
            <h1 className='text-success'>Login</h1>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passRef} type="password" placeholder="Password" required />
            </Form.Group>

            <input className="btn text-dark fw-bold form-submit" type="submit" value="Login" />

            <br />
            <br />
            {errorMsg}

            <p> New to here? <Link className='form-link' to="/signUp">Create new account</Link></p>
            <p> Forget Password? <Link className='form-link' to="" onClick={handleResetPass}>Reset Now</Link></p>


            <SocialLogin></SocialLogin>

        </Form>
    );
};

export default Login;