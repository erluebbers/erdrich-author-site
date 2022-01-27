import '../Components.css';
import React from "react"

function ReviewForm() {

  return (
    <div>
      <form>
        <h3>Submit a Review!</h3>
        <select>
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
          type="text"
          name="name"
          placeholder="Enter your username..."
          // className="input-text"
          // value={newToy.name}
          // onChange={handleChange}
        />
        <br />
        <input
          type="textarea"

          name="post"
          placeholder="Tell us your thoughts..."
          // className="input-text"
          // value={newToy.image}
          // onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Post"
          // className="submit"
        />
      </form>
    </div>
  );
}

export default ReviewForm;