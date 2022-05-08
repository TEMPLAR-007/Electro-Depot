import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ProductShow.css'

const ProductShow = ({ product }) => {
    const { _id, name, img, price, description, supplier, quantity } = product;

    const navigate = useNavigate()

    const handleNavigateProductDetail = id => {
        navigate(`/product/${id}`);
    }

    return (

        <div className="col-md-4">

            <Col>
                <Card className="p-3 mb-5 card">
                    <Card.Img variant="top w-50 mx-auto" src={img} />
                    <hr />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 100)}...
                        </Card.Text>
                        <h5>${price}</h5>
                        <br />
                        <div className='d-flex justify-content-around'>
                            <h6>Quantity: <span className='text-danger'> {quantity}</span></h6>
                            <h6>Supplier: <span className='text-success fw-normal'> {supplier}</span></h6>
                        </div>
                        <br />
                        <Button onClick={() => handleNavigateProductDetail(_id)} variant="btn btn-light btn-outline-secondary fw-bold px-5">Update</Button>

                    </Card.Body>
                </Card>
            </Col>

        </div >

    );
};

export default ProductShow;