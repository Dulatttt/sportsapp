import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Posts from '../components/Posts';
function Category(){
    const {id}=useParams();
    const [category, setCategory]=useState({});
    const  [posts, setPosts]=useState([]);
    useEffect(() =>{
        async function fetchCategory() {
            try{
                const response=await axios.get(`https://48b9d4e91404856d.mokky.dev/category/${id}`);
                setCategory(response.data);
            }
            catch(error){
                console.log(error);
            }
            
        }

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
        fetchCategory();

    }, [id]);
    return(
        <div>
            <Header/>
            <Link to="/">
              <div class="category">
                <div class="category-word">Все новости</div>
            </div>
            </Link>

             <main>
             <div class="category">
                <div class="category-word">{category.name}</div>
            </div>
            <div className="post-card__body">
            {posts.map((post) => {
                return post.category===category.name ?(
                    <Posts key={post.id} post={post}/>
                ) : null
                 
            })}
                   
                
            
        </div>
            
                {/* <div class="post">
                    <div class="post-card">
                        <div class="post-card-body">
                            <div class="post-card--title">Рахим Стерлинг перешел в Арсенал на правах аренды</div>
                            <div class="post-card--date">03.09.2024</div>
                            <div class="post-card--category">Футбол</div>
                        </div>
                    </div>
                    <div class="post-card">
                        <div class="post-card-body">
                            <div class="post-card--title">Рахим Стерлинг перешел в Арсенал на правах аренды</div>
                            <div class="post-card--date">03.09.2024</div>
                            <div class="post-card--category">Футбол</div>
                        </div>
                    </div>
                    <div class="post-card">
                        <div class="post-card-body">
                            <div class="post-card--title">Рахим Стерлинг перешел в Арсенал на правах аренды</div>
                            <div class="post-card--date">03.09.2024</div>
                            <div class="post-card--category">Футбол</div>
                        </div>
                    </div>
                    <div class="post-card">
                        <div class="post-card-body">
                            <div class="post-card--title">Рахим Стерлинг перешел в Арсенал на правах аренды</div>
                            <div class="post-card--date">03.09.2024</div>
                            <div class="post-card--category">Футбол</div>
                        </div>
                    </div>
                    <div class="post-card">
                        <div class="post-card-body">
                            <div class="post-card--title">Рахим Стерлинг перешел в Арсенал на правах аренды</div>
                            <div class="post-card--date">03.09.2024</div>
                            <div class="post-card--category">Футбол</div>
                        </div>
                    </div>
                    <div class="post-card">
                        <div class="post-card-body">
                            <div class="post-card--title">Рахим Стерлинг перешел в Арсенал на правах аренды</div>
                            <div class="post-card--date">03.09.2024</div>
                            <div class="post-card--category">Футбол</div>
                        </div>
                    </div>
                    <div class="post-card">
                        <div class="post-card-body">
                            <div class="post-card--title">Рахим Стерлинг перешел в Арсенал на правах аренды</div>
                            <div class="post-card--date">03.09.2024</div>
                            <div class="post-card--category">Футбол</div>
                        </div>
                    </div>
                </div> */}
            </main>
        </div>   
    )

}


export default Category;