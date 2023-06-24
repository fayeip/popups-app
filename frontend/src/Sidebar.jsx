import Row from 'react-bootstrap/Row'; 
import CategoryButton from './CategoryButton';


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
        {catButtons} 
      </Row>
  );
}

export default Sidebar; 
