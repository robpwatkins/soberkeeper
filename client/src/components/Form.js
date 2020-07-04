import React, { useState } from 'react';

const Form = () => {
  const [input, setInput] = useState({
    username: '',
    post: ''
  })

  const handleChange = event => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const postBackendAPI = async (username, post) => {
    const response = await fetch('/testPosts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ID: 7,
        username: username,
        post: post 
      })
    })
    const body = await response.json();
    console.log(body);
    return body;
  }

  const handleSubmit = event => {
    event.preventDefault();
    let {username, post} = input;
    postBackendAPI(username, post);
  }
  // console.log(input);
  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="username"
          value={input.username}
          name="username"
          onChange={handleChange} 
        />
        <br />
        <textarea 
          placeholder="post" 
          cols="30" 
          rows="10" 
          value={input.post}
          name="post"
          onChange={handleChange}
        />
        <br />
        <button onSubmit={handleSubmit}>Submit!</button>
      </form>
    </div>
  )
}

export default Form;