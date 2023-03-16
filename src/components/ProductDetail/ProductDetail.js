import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://electro-depot.up.railway.app/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);


    const handleUpdateQuantity = event => {
        event.preventDefault();

        const FormQuantity = event.target.Quantity.value;

        const AddedQuantity = parseInt(FormQuantity) + product.quantity;

        const updatedQuantity = { AddedQuantity };

        setProduct({ ...product, quantity: product.quantity = parseInt(product.quantity) + parseInt(FormQuantity) });

        const url = `https://electro-depot.up.railway.app/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
            })

        event.target.reset()
    }


    let qtn;
    if (product.quantity <= 0) {
        qtn = 'Sold Out';
    }
    else {
        qtn = product.quantity;
    }


    const handleDeleteQuantity = event => {

        event.preventDefault();

        setProduct({ ...product, quantity: product.quantity = parseInt(product.quantity) - 1 });

        const url = `https://electro-depot.up.railway.app/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
            })

    }


    return (
        <div>

            <Container>
                <Row className='mt-5'>
                    <Col xs={12} md={6}>
                        <div >
                            <img className='w-75 mx-auto shadow mb-5 bg-body rounded' src={product.img} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='text-start mt-5'>
                            <h3>{product.name}</h3>
                            <p className='mt-4 mb-4'> {product.description}</p>
                            <h5 className='mt-4 mb-4'>Price: ${product.price}</h5>
                            <h6>Quantity: <span className='text-danger'> {qtn}</span></h6>
                            <h6>Supplier name: <span className='text-primary fw-normal'> {product.supplier}</span></h6>
                            <Button onClick={handleDeleteQuantity} variant="warning mt-3">delivered</Button>
                            <div className='mt-4'>
                                <h5 className='mb-2'>Restock the current product</h5>
                                <form onSubmit={handleUpdateQuantity} >
                                    <input type="number" name="Quantity" placeholder='Input Quantity' id="" />
                                    <input className='ms-1 bg-success text-light border-0 p-1 rounded' type="submit" value="restock" />
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>



        </div >
    );
};

export default ProductDetail;