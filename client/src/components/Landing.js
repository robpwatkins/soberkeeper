import React, { useState, useEffect } from 'react';
import Outward from './Outward';

const Landing = () => {
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);

  const getBackendAPI = async () => {
    const response = await fetch('/testPosts/outward');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }
  
  useEffect(() => {
    getBackendAPI()
    .then(res => setPosts(res));
  }, [])

  const uploadFile = async event => {
    console.log('uploading file . . .');
    const files = event.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'puppyAPI');

    const response = await fetch('https://api.cloudinary.com/v1_1/robpwatkins/image/upload', {
      method: 'Post',
      body: data
    });
    const file = await response.json();
    console.log(file);
    setImage(file.secure_url);
  }

  const handleClick = () => {
    getBackendAPI()
      .then(res => setPosts(res));
  }
  // console.log(posts[0]);
  return (
    <div className="landing">
      <div className="post-area">
        <div className="outward-container">
        <fieldset /* disabled={loading} aria-busy={loading} */>
              <label htmlFor="file">
                Image
                <input 
                  type="file" 
                  id="file" 
                  name="file" 
                  placeholder="Upload an image" 
                  required 
                  // value={this.state.image}
                  onChange={uploadFile}
                  />
                  {image && <img width="200" src={image} alt="Upload Preview" />}
              </label>
              {/* <label htmlFor="title">
                Title
                <input 
                  type="text" 
                  id="title" 
                  name="title" 
                  placeholder="Title" 
                  required 
                  value={this.state.title}
                  onChange={this.handleChange}
                  />
              </label>
              <label htmlFor="price">
                Price
                <input 
                  type="number" 
                  id="price" 
                  name="price" 
                  placeholder="Price" 
                  required 
                  value={this.state.price}
                  onChange={this.handleChange}
                  />
              </label>
              <label htmlFor="description">
                Description
                <textarea 
                  id="description" 
                  name="description" 
                  placeholder="Enter a description" 
                  required 
                  value={this.state.description}
                  onChange={this.handleChange}
                  />
              </label> */}
              <button type="submit">SUBMIT</button>
            </fieldset>
          {/* <Outward />
          <Outward />
          <Outward />
          <Outward />
          <Outward />
          <Outward />
          <Outward />
          <Outward /> */}
        </div>
      </div>
    </div>
  )
}

export default Landing;