import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const CardNews = () => {
    const [post, setPost] = useState([ ]);
    const TokenNews = "8e793b2afa0f4ac887747baf9ba950ee";
    useEffect(() => {
        axios
        .get("https://newsapi.org/v2/top-headlines?country=id&apiKey=" + TokenNews)
        .then(res => {
            console.log(res);
            setPost(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return ( 
        <div>
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                   Paragraph isi content field
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                </ListGroup>
                <Card.Body >
                    <Button variant="primary" size="lg">
                      GetNews
                    </Button>
                </Card.Body>
            </Card>
        </div>
     );
}
 
export default CardNews;