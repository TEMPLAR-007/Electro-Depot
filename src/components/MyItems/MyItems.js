import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyItems = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    useEffect(() => {
        const email = user?.email;
        const url = `https://fathomless-plateau-74593.herokuapp.com/myItems?email=${email}`
        fetch(url, {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {


                if (Array.isArray(data)) {
                    setProducts(data)
                }
                else {
                    setProducts([])
                    toast(data.message)
                    signOut(auth)
                    navigate('/login')


                }

            })
    }, [user]);

    const handleRemove = id => {

        const proceed = window.confirm('are you sure ?')

        if (proceed) {
            const url = `https://fathomless-plateau-74593.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);

                })
        }
    };

    return (
        <div className='container'>
            <h2 className='mt-3 text-warning'><span className='fw-bold text-danger'>{user?.displayName}'s</span> Item</h2>

            <Link to='/addItem'>
                <Button className='m-3' variant="outline-success fw-bold" size="lg">
                    Add New Item
                </Button>
            </Link>

            <h4 className='mt-3 fw-bold text-warning'>Added Items: <span className='text-danger'>{products.length}</span></h4>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Supplier</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr key={product._id} >
                            <td className='text-start ps-5'>{product.name}</td>
                            <td><img width={100} src={product.img} alt="" /></td>
                            <td>{product.quantity}</td>
                            <td>${product.price}</td>
                            <td>{product.supplier}</td>
                            <td >
                                <Button className='me-2' onClick={() => handleRemove(product._id)} variant="danger">Delete</Button>
                                <Button onClick={() => navigate(`/product/${product._id}`)} variant="warning">Update</Button>
                            </td>

                        </tr>)
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default MyItems;