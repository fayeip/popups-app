import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import CategoryButton from './CategoryButton';
// import Form from 'react-bootstrap/Form'; 


function Sidebar(props) {
  const categories = props.categories; 
  const catButtons = []; 

  for (const cat of Object.values(categories)) {
      const catBtn = (
        <CategoryButton key={cat.alias} 
                        categoryName={cat.name} 
                        categoryAlias={cat.alias} 
                        handleCatButtonClick={props.handleCatButtonClick} />
        );
      catButtons.push(catBtn); 
  } 

  return (
      <Row>
        <Col>
        {/* <Form>
          <Form.Group controlId="searchBiz">
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="primary">Search</Button> 
        </Form> */}
        {catButtons} 
        </Col>
      </Row>
  );
}

export default Sidebar; 
