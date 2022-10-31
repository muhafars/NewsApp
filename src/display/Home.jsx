import Navs from "../layout/Navs";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import React, { useState, useEffect } from 'react';
import axios from   "axios";



const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
     axios
        .get("https://newsapi.org/v2/top-headlines?country=id&apiKey=8e793b2afa0f4ac887747baf9ba950ee", {})
        .then((res) => {
            console.log(res);
            setData(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    return ( 
        <div>
            <Navs />
            <Header />
            {data.map((item, index) => {
                return (
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="{item.urlToImage}"/> */}
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.content}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>{item.description}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body >
                            <Button variant="primary" size="lg">{item.url}</Button>
                        </Card.Body>
                    </Card> 
                    );
            })}

            <Footer />
        </div>
     );
}
 
export default Home;