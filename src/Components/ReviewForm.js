import '../Components.css';
import React, { useState } from "react"

function ReviewForm( {handleSubmit} ) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    stars: "",
    title: "",
    post: "",
  })

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
  }

  console.log(formData)

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-inline">
        <h3>Submit a Review!</h3>
        <select name="title" onChange={handleChange} value={formData.title} className="form-input">
          <option value="Select Title">Select Title</option>
          <option value="The Round House">The Round House</option>
          <option value="The Night Watchman">The Night Watchman</option>
          <option value="Love Medicine">Love Medicine</option>
          <option value="The Plague of Doves">The Plague of Doves</option>
          <option value="Future Home of the Living God">Future Home of the Living God</option>
          <option value="The Painted Drum">The Painted Drum</option>
          <option value="Larose">Larose</option>
          <option value="The Sentence">The Sentence</option>
          <option value="Tracks">Tracks</option>
          <option value="The Beet Queen">The Beet Queen</option>
        </select>
        <input
          className='form-input'
          type="text"
          name="name"
          placeholder="Enter your username..."
          onChange={handleChange}
          value={formData.name}
        />
        <br />
        <input
          className='form-input'
          type="textarea"
          name="post"
          placeholder="Tell us your thoughts..."
          onChange={handleChange}
          value={formData.post}
        />
        <br />
        <select name="stars" onChange={handleChange} value={formData.stars} className='form-input'>
          <option value="How Many Stars?">How Many Stars?</option>
          <option value="1">1</option>
          <option value="2">3</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input
          type="submit"
          name="submit"
          value="Post"
        />
      </form>
    </div>
  );
}

export default ReviewForm;