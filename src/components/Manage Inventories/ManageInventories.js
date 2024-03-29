import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css';

const ManageInventories = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://electro-depot.up.railway.app/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleRemove = id => {

        const proceed = window.confirm('are you sure ?')

        if (proceed) {
            const url = `https://electro-depot.up.railway.app/product/${id}`
            fetch(url, {
                method: 'DELETE'
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
            <h1 className='mt-3 fw-bold text-warning'>Manage Inventory</h1>

            <Link to='/addItem'>
                <Button className='m-3' variant="outline-success fw-bold" size="lg">
                    Add New Item
                </Button>
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
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
                            <td>{product.quantity}</td>
                            <td>${product.price}</td>
                            <td>{product.supplier}</td>
                            <td className='d-flex justify-content-evenly'>
                                <Button onClick={() => handleRemove(product._id)} variant="danger">Delete</Button>
                                <Button onClick={() => navigate(`/product/${product._id}`)} variant="warning">Update</Button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default ManageInventories;