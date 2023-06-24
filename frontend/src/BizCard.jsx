import Col from 'react-bootstrap/Col'; 
import Card from 'react-bootstrap/Card'; 
import CategoryButton from './CategoryButton';


function BizCard(props) {

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={props.image_url} />
                <Card.Body>
                    <Card.Title> {props.name} </Card.Title>
                    <Card.Text> 
                        <p> {props.address_street} <br /> {props.address_city} {props.address_state} {props.address_zip} </p>
                        <p> {props.display_phone} </p> 
                        <p> Rating: {props.rating} </p> 
                        <p> Categories: {props.categories.map(o => o.name).join(" ")} </p>  
                        <p> Check out their <a href={props.yelp_url}>Yelp review</a>! </p>           
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ); 
}

export default BizCard; 
