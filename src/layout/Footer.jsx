import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return ( 
        <div>
         <Nav  fill variant="tabs" >
            <Navbar.Brand href="#home">
            <img
              alt="ASH"
              src="https://i.postimg.cc/qRk5zMNr/icon.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            News APP
          </Navbar.Brand>
            <Nav.Item >
                <Nav.Link eventKey="link-1">Muhammad Fajri Assidiq</Nav.Link>
            </Nav.Item>
         </Nav>
        </div>
     );
}
 
export default Footer;