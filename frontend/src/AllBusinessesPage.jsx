import Row from 'react-bootstrap/Row'; 
import BizCard from './BizCard';


function AllBusinessesPage(props) {
  const allBusinesses = props.businesses; 
  console.log("inside AllBusinessesPage"); 
  const bizCards = []; 

  for (const biz of Object.values(allBusinesses)) {
      const bizCard = (
          <BizCard 
              key={biz.business_id} 
              name={biz.name} 
              image_url={biz.image_url} 
              yelp_url={biz.yelp_url} 
              review_count={biz.review_count} 
              rating={biz.rating} 
              coordinates_latitude={biz.coordinates_latitude} 
              coordinates_longitude={biz.coordinates_longitude} 
              address_street={biz.address_street} 
              address_city={biz.address_city} 
              address_state={biz.address_state} 
              address_zip={biz.address_zip} 
              display_phone={biz.display_phone} 
              categories={biz.categories}
          />
      );
      bizCards.push(bizCard); 
  }

  return (
      <Row xs={1} md={3} className="g-3">
        { bizCards } 
      </Row> 
  );

}

export default AllBusinessesPage; 
