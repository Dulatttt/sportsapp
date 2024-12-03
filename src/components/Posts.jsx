import "../assets/style/style.css";

function Posts({post}) {
  return (
    <div>
      <div className="post-card">
        <div className="post-card__body">
         
        <div className="post-card__title">{post.title}</div>
          
         
          <div className="post-card__category">
            {post.category}
            <div className="post-card__date">{post.date}</div>
          </div>
        </div>
        
        </div>
        
        
      </div>

  );
}

export default Posts;
