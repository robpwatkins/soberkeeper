import React from 'react';

const Posts = ({ posts }) => {
  
  return (
    <div className="posts">
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h3>{post.ID}</h3>
            <p style={{fontSize: "25px", fontWeight: "bold"}}>{post.username}</p>
            <p style={{fontSize: "15px"}}>{post.post}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Posts;