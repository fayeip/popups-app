import { useState } from 'react'; 
import { useEffect } from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import AllBusinessesPage from './AllBusinessesPage';
import Sidebar from './Sidebar'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  const [businesses, setBusinesses] = useState({});
  const [activeCategories, setActiveCategories] = useState({}); 

  useEffect(() => {
    fetch('/api/businesses')
      .then((response) => response.json())
      .then((businesses) => {
        console.log("inside fetch"); 
        setBusinesses(businesses);
      });
  }, []);

  console.log(businesses); 

  useEffect(() => {
    fetch('/api/categories')
    .then((response) => response.json())
    .then((activeCategories) => {
      setActiveCategories(activeCategories);
    });
    }, []);
  
  console.log(activeCategories); 

  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidebar activeCategories={activeCategories} /> 
        </Col>
        <Col md={10}>
          <AllBusinessesPage businesses={businesses} /> 
        </Col>
      </Row>
    </Container>
  )
}

export default App;
