import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Glogo from '../../Images/Social logo/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    if (loading) {
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

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='w-50 border border-1'></div>
                <p className='mt-3 px-2'>or</p>
                <div className='w-50 border border-1'></div>
            </div>
            {errorMsg}
            <br />
            <div className='d-flex justify-content-center'>
                <Button onClick={() => signInWithGoogle()} variant="btn btn-light px-5 border"><img width={'47px'} src={Glogo} alt="" /> <span className='px-2'>Continue with Google</span> </Button>
            </div>
        </div>
    );
};

export default SocialLogin;