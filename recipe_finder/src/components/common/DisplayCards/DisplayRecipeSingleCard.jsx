import "./DisplaySingleCard.css";
import { Link } from "react-router-dom";


const StarRating = ({ rating, popularity }) => {
    const stars = [];
    const totalStars = 5;
  
    for (let i = 0; i < totalStars; i++) {
      if (i < rating) {
        // Filled star
        stars.push(<span key={i}>&#9733;</span>);
      } else {
        // Empty star
        stars.push(<span key={i}>&#9734;</span>);
      }
    }
  
    return <div>{stars} {popularity}</div>;
  };
  
export default function DisplayRecipeSingleCard({recipe})
{
    return(
        <>
            <div className="card m-3" style={{width: '23rem', padding:"0", position:"relative"}}>
                <div style={{ height: '200px', overflow: 'hidden'}}>
                    <img className="card-img-top " 
                    src={recipe.imgUrl} 
                    alt="Card image cap"
                    style={{width:"100%", height:"auto", overflow:"hidden", objectFit: 'cover'}}
                    />
                </div>


                <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <div className="starRate">
                        <StarRating rating={recipe.rate} popularity={recipe.popularity} />
                    </div>
                    
                    <br></br>
                    <button className="button-74" role="button"><Link to={`/recipe/${recipe['recipe_id']}`}>See More</Link></button>
                </div>

            </div>
        </>
    );
}