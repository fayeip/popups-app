import Col from 'react-bootstrap/Col'; 
import Card from 'react-bootstrap/Card'; 
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Rating from './Rating';
import yelpLogo from './assets/yelp_logo.png'; 


function CategoryPills(prop) {
    let filteredCats = [];
    for (const cat of prop.categories) {
        if ((cat != "Pop-Up Restaurants") && (cat != "Pop-up Shops") && (cat != "Vitamins & Supplements") && (cat != "Venues & Event Spaces")) {
            filteredCats.push(<Badge pill bg="secondary" className='me-2'>{cat}</Badge>);
        }
    }

  return (
    // <Stack direction="horizontal" gap={2}> {filteredCats} </Stack> 
    <div className='mt-3 mb-3'> {filteredCats} </div>
  );
}

function BizCard(props) {

    return (
        <Col>
            <Card className='h-100' border='secondary'>
            <Card.Img variant='top' src={props.image_url} />
                <Card.Body>
                    <Card.Title> {props.name} </Card.Title>
                    <Rating rating={props.rating} /> 
                    <CategoryPills categories={props.categories.map(o => o.name)} />
                    <Card.Text> 
                        {props.address_street} <br /> {props.address_city} {props.address_state} {props.address_zip} <br /> 
                        {props.display_phone} 
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <span>Check out their review on </span> <a href={props.yelp_url}><img src={yelpLogo} width="50px" /></a>
                </Card.Footer>
            </Card>
        </Col>
    ); 
}

export default BizCard; 
