import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between javascript and nodejs?</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Javascript is an abstract concept, not something that can do anything on its own (like any other language).

                        To run JavaScript you need some place to run it. If you are programming something for a website with javascript, the javascript-code will be the delivered to the users browser and the browser will run it.
                        <br />
                        <br />
                        Node.js is basically a place where you can run your javascript code, that (I assume) has some extra features like APIs to interact with the system etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Differences between sql and nosql databases?</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        SQL: your data is in tables, different tables might relate to each other by having common columns, you query and manipulate them using SQL
                        <br />
                        <br />
                        NoSQL: your data is stored in something with key:value pairs similar to JSON. You can have nested structures. There are fewer checks and restrictions on the structure of your dataset. You query and manipulate using syntax specific to the type of NoSQL database you’ve chosen.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> What is the purpose of jwt and how does it work?</Accordion.Header>
                    <Accordion.Body className='text-start'>
                        JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        <br />
                        <br />
                        How JWT Works -
                        <br />
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>




        </div>
    );
};

export default Blogs;