import Row from 'react-bootstrap/Row'; 
import CategoryButton from './CategoryButton';


function Sidebar(props) {
  const activeCategories = props.activeCategories; 
  console.log("inside Sidebar"); 
  const catButtons = []; 

  for (const cat of Object.values(activeCategories)) {
      console.log(cat); 
      const catBtn = (<CategoryButton categoryName={cat.name} />);
      catButtons.push(catBtn); 
  } 

  return (
      <Row>
        {catButtons} 
      </Row>
  );
}

export default Sidebar; 
