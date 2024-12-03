import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";

function PostList() {
  const  [posts, setPosts]=useState([]);
    useEffect(() =>{

        async function fetchPosts() {

            try{
                const response = await axios.get('https://48b9d4e91404856d.mokky.dev/posts');
                setPosts(response.data);

            }
            catch(error){
                console.log(error);

            }
            
        }
        fetchPosts();

    }, []
)

    return (
        <div>
            <div className="Allnews">
                Все новости
            </div>
          
        <div className="post-card__body">
            {posts.map((post) => (
                <Link key={post.id} to={`/post/${post.id}`}>
                <Posts post={post} />
            </Link>
                   
                
            ))}
        </div>
    
        </div>
    );
}

export default PostList;
