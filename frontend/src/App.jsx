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
  const [categories, setCategories] = useState({}); 
  const [activeBusinesses, setActiveBusinesses] = useState({}); 
  const [activeCategory, setActiveCategory] = useState(""); 

  useEffect(() => {
    fetch('/api/businesses')
      .then((response) => response.json())
      .then((businesses) => {
        setBusinesses(businesses);
        setActiveBusinesses(businesses); 
      });
  }, []);


  useEffect(() => {
    fetch('/api/categories')
    .then((response) => response.json())
    .then((categories) => {
      setCategories(categories);
    });
    }, []);
  

  function handleCatButtonClick(evt) {
    let catClicked = evt.target.value; 
    setActiveCategory(catClicked);
    filterBusinesses(catClicked); 
  }


  function filterBusinesses(catAlias) {
    let filteredBiz = []; 
    for (const biz of Object.values(businesses)) {
      if (biz.categories.map(o => o.alias).includes(catAlias)) {
        filteredBiz.push(biz); 
      }
    }
    setActiveBusinesses(filteredBiz); 
  }


  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Sidebar categories={categories} handleCatButtonClick={handleCatButtonClick} /> 
        </Col>
        <Col md={10}>
          <AllBusinessesPage businesses={activeBusinesses} /> 
        </Col>
      </Row>
    </Container>
  )
}

export default App;
