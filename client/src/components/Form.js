import React, { useState } from 'react';

const Form = () => {
  const [input, setInput] = useState({
    username: '',
    post: ''
  })

  return (
    <div className="form">
      <form action="">
        <input type="text" placeholder="username"/>
        <br />
        <textarea placeholder="post" cols="30" rows="10"></textarea>
      </form>
    </div>
  )
}

export default Form;