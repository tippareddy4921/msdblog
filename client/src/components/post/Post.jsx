import "./post.css"
import {Link} from "react-router-dom"
function Post({post}) {
    // const PF="localhost:5000/images/";
    return (
        <div className="post"> 
            {/* {post.map(p=>{
                
            })} */}
            {post.photo&&(
            <img 
            className="postImg"
            src={post.photo}    
            alt="" 
            />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {
                        post.categories.map(c=>(

                            <span className="postCat">{c.name}</span>
                        ))
                    }
                    {/* <span className="postCat">Life</span> */}
                </div>
                <Link to={`/post/${post._id}`}>
                <span className="postTitle">
                    {post.title}
                </span>
                </Link>
                <hr />
                <span className="postDate">
                {post.createdAt}
                </span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
        
    )
}

export default Post
