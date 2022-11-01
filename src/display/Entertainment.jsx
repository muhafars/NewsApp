
import Header from "../layout/Header";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import React, { useState, useEffect } from 'react';
import axios from   "axios";



const Entertainment = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
     axios
        .get("https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=8e793b2afa0f4ac887747baf9ba950ee", {})
        .then((res) => {
            console.log(res);
            setData(res.data.articles);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    return ( 
        <div>

            <Header />
            {data.map((item, index) => {
                return (
                //  <Stack direction="horizontal" gap={1}>
                    <Card style={{ 
                        width: '16rem', 
                        float:"left", 
                        marginTop:"2rem",
                        marginRight:7,
                        marginBottom:"2rem",
                        marginLeft:5 }}>
                        <Card.Img variant="top" src={item.urlToImage}/>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.content}</Card.Text>
                        </Card.Body>
                        {/* <ListGroup className="list-group-flush">
                            <ListGroup.Item>{item.description}</ListGroup.Item>
                        </ListGroup> */}
                        <Card.Body >
                            <Button variant="primary" size="lg" href={item.url}>Menuju Halaman</Button>
                        </Card.Body>
                    </Card> 
                );
            })}

        </div>
     );
}
 
export default Entertainment;