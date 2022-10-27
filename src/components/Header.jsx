import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const HeaderNews = () => {
    return ( 
        <div >
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    
                    src="https://i.postimg.cc/nV0ZqcXW/slide1.png"
                   
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://i.postimg.cc/gjXWY3G6/ales-nesetril-Im7l-Zjxe-Lhg-unsplash.png"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Technology</h3>
                    <p>Selalu Update technology.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.postimg.cc/mDQLv0yF/gentrit-sylejmani-Jj-Uyj-E-o-Eb-M-unsplash-1.png"
                    />
                    <Carousel.Caption>
                    <h3>Sports About</h3>
                    <p>
                       Be Healthy, Be Sporty, Tebarkan sehat.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

     );
}
 
export default HeaderNews;