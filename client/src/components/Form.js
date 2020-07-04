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
  console.log(input);
  return (
    <div className="form">
      <form action="">
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
      </form>
    </div>
  )
}

export default Form;