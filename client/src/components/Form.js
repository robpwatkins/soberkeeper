import React, { useState } from 'react';

const Form = () => {
  const [input, setInput] = useState({
    username: '',
    outward: ''
  })

  const handleChange = event => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const postBackendAPI = async (username, outward) => {
    const response = await fetch('/testPosts/outward', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        outward: outward 
      })
    })
    const body = await response.json();
    console.log(body);
    return body;
  }

  const handleSubmit = event => {
    event.preventDefault();
    let {username, outward} = input;
    postBackendAPI(username, outward);
    setInput({
      username: '',
      outward: ''
    })
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
          name="outward"
          onChange={handleChange}
        />
        <br />
        <button onSubmit={handleSubmit}>Submit!</button>
      </form>
    </div>
  )
}

export default Form;