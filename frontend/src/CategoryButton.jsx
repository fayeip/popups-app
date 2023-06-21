import Button from 'react-bootstrap/Button';

function CategoryButton(props) {
  return (
    <Button variant="outline-secondary" size="sm" className="m-1"> 
      {props.categoryName} 
    </Button> 
  );
}

export default CategoryButton; 
