import "./DisplaySingleCard.css";
  
export default function DisplayBlogCard({blog})
{
    return(
        <>
            <div className="card m-3" style={{width: '23rem', padding:"0", position:"relative"}}>
                <div style={{ height: '200px', overflow: 'hidden'}}>
                    <img className="card-img-top " 
                    src={blog.imgUrl} 
                    alt="Card image cap"
                    style={{width:"100%", height:"auto", overflow:"hidden", objectFit: 'cover'}}
                    />
                </div>


                <div className="card-body">
                    <h5 className="card-title">{blog.blogTitle}</h5>

                    
                    <br></br>
                    <button className="button-74" role="button">See More</button>
                </div>

                

            </div>
        </>
    );
}