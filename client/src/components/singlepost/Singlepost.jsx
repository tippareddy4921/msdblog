import { useParams,Link } from "react-router-dom"
import "./singlepost.css"
import { useEffect, useState } from "react"
import axios  from "axios"


function Singlepost() {
    const [post, setPost]=useState()
    const {postId}= useParams()
    console.log(post)
    useEffect(()=>{
        const fetchPosts=async()=>{
            const res = await axios.get(`http://localhost:5000/api/posts/${postId}`)
            setPost(res.data);
            
        }
        fetchPosts();
    },[postId])
    return (
        <div className="singlepost">
            {post && <div className="singlepostwrapper">
                <img 
                    className="singleimg"
                    src={post.photo}
                    alt="" 
                />
                <h1 className="singlepostTitle">
                    
                    {post.title}
                    <div className="singlepostEdit">
                    <i className="singlepostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlepostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlepostInfo">
                    <span className="singlepostAuthor">Author:
                    <Link to={`/?user=${post.username}`} className="link">
                     <b>{post.username}</b></Link> </span>
                    <span className="singlepostDate">{post.createdAt} </span>
                </div>
                <p className="singlepostDesc">{post.desc}</p>
            </div>}
        </div>
    )
}

export default Singlepost
