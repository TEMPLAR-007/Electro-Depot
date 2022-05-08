import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Chart from './Chart';
import ContactUs from './ContactUs';
import ProductShow from './ProductShow';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fathomless-plateau-74593.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    return (
        <div>
            <Banner></Banner>
            <div className="container">
                <div className='m-5'>
                    <h1 className='text-info'>RECENT PRODUCTS</h1>
                    <p className='text-muted'>Browse through the vast selection of products that have recently been added to our inventory.</p>
                </div>
                <Row xs={1} md={2} className="g-4">
                    {
                        products.slice(0, 6).map(product => <ProductShow
                            key={product._id}
                            product={product}
                        ></ProductShow>)
                    }
                </Row>

                <Link to="/manageInventories" >
                    <Button variant="outline-warning">Mange Inventories</Button>
                </Link>

            </div>

            <Chart></Chart>

            <ContactUs></ContactUs>

        </div >
    );
};

export default Home;