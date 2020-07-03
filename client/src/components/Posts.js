import React from 'react';

const Posts = ({ posts }) => {
  
  return (
    <div className="posts">
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h3>{post.ID}</h3>
            <h5>{post.username}</h5>
            <p>{post.post}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Posts;