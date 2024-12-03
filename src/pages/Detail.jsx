import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import back from '../assets/images/img/Frame.svg';
import Header from "../components/Header";
function Detail() {
  const {id}=useParams();
  const [post, setPost]=useState({})
  useEffect(() => {
    async function fetchPost() {
      try{
        const response= await axios.get(`https://48b9d4e91404856d.mokky.dev/posts/${id}`);
        setPost(response.data);

      }
      catch(error){
        console.log(error);
      }
    }
    fetchPost();
  }, [id])

    return(
      <div>
        <Header/>
        <Link to="/">
        <div className="back">
          <img src={back} alt="" /> Назад
        </div>
        </Link>
       
        <div class="news">
                    <div class="news-title">{post.title}</div>
                    <div class="news-date">{post.date}</div>
                    <div class="news-information">{post.description}</div>
                    <img src={post.imageUrl} class="news-image"/>
                    <div class="news-istochnik">{post.author}</div>
                    <div class="news-button"><button class="news-button-box">{post.category}</button></div>
                </div>
              </div>
    )
}



export default Detail;