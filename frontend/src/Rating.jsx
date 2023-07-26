import fullStar from "./assets/star.png"; 
import halfStar from "./assets/half-star.png"; 


function FullStar(prop) {
    return ( <img src={fullStar} width="18px" height="18px" /> );
}

function HalfStar(prop) {
    return ( <img src={halfStar} width="18px" height="18px" /> ); 
}


function Rating(props) {
    const numRating = props.rating; 
    const numStars = [...Array(Math.floor(numRating))].map((e, i) => <FullStar key={i} />); 
    
    if (numRating - (Math.floor(numRating))) { 
        numStars.push(<HalfStar key={5} />); 
    } 

    return (
        <div className='mt-2 mb-3'> {numStars} </div>
    );
}

export default Rating; 
