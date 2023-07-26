import { useState, useEffect, createContext } from 'react'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Navbar from 'react-bootstrap/Navbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Sidebar from './Sidebar'; 
import AllBusinessesOnGrid from './AllBusinessesOnGrid';
import AllBusinessesOnMap from './AllBusinessesOnMap';
import 'bootstrap/dist/css/bootstrap.min.css'; 



function App() {
  const [businesses, setBusinesses] = useState({});
  const [categories, setCategories] = useState({}); 
  const [activeBusinesses, setActiveBusinesses] = useState({}); 
  const [activeCategory, setActiveCategory] = useState(""); 
  const [currentView, setCurrentView] = useState("Grid View"); 

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
      delete categories['popuprestaurants'];
      delete categories['popupshops'];
      delete categories['vitaminssupplements'];
      delete categories['venues'];
      setCategories(categories);
    });
    }, []);

  for (const cat of Object.keys(categories)) {
    console.log(cat);
  }

  const handleCatButtonClick = (evt) => {
    let catClicked = evt.target.value; 
    setActiveCategory(catClicked);
    filterBusinesses(catClicked); 
  }

  const filterBusinesses = (catAlias) => {
    let filteredBiz = []; 
    for (const biz of Object.values(businesses)) {
      if (biz.categories.map(o => o.alias).includes(catAlias)) {
        filteredBiz.push(biz); 
      }
    }
    setActiveBusinesses(filteredBiz); 
  }

  const handleViewClick = (view) => {
    if (currentView != view) {
      setCurrentView(view); 
    }
  }


  return (
    <Container fluid>
      <Navbar className='bg-body-tertiary' expand='lg'>
        <Navbar.Brand href="/">Pop-Ups</Navbar.Brand>
        <Navbar.Toggle /> 
          <Navbar.Collapse className="justify-content-end">
          <ToggleButtonGroup type="radio" name="view" defaultValue="grid">
            <ToggleButton id="grid" variant='secondary' value="grid" onClick={(evt) => {handleViewClick(evt.target.innerHTML)}}>Grid View</ToggleButton>
            <ToggleButton id="map" variant='secondary' value="map" onClick={(evt) => {handleViewClick(evt.target.innerHTML)}}>Map View</ToggleButton>
          </ToggleButtonGroup>
        </Navbar.Collapse> 
      </Navbar>
      <Row>
        <Col md={2}>
          <Sidebar categories={categories} handleCatButtonClick={handleCatButtonClick} /> 
        </Col>
        <Col md={10}>
          {currentView === "Grid View" ? <AllBusinessesOnGrid businesses={activeBusinesses} /> : <AllBusinessesOnMap businesses={activeBusinesses} />}
        </Col>
      </Row>
    </Container>
  )
}

export default App;
