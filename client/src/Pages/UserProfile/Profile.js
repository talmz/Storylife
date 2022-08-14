import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from "./AuthForm.module.css";

const Profile = () => {
  <div>
    <section >
      <h1>Create new Story</h1>
      <form>
        <div >
          <label>Story Title</label>
          <input type="text" id="title" required ref={titleInput} />
        </div>
        <div >
          <label htmlFor="img">Enter image URL</label>
          <input type="text" id="img" required ref={imgInput} />
        </div>
        <div>
          <div >
            <label htmlFor="description">Please enter story description</label>
            <input
              type="text"
              id="description"
              required
              ref={descriptionInput}
            />
          </div>
        </div>
        <div >
          <button onClick={createStory}>Create</button>
        </div>
      </form>
    </section>
  </div>;
};

export default Profile;
