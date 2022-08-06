import classes from "./NewStory.module.css";
import { useRef } from "react";
import axios from "axios";

const NewStory = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const titleInput = useRef();
  const imgInput = useRef();
  const descriptionInput = useRef();

  const createStory = async (event) => {
    event.preventDefault();
    var storyInput;
    await getUserId().then(
      (res) =>
        (storyInput = {
          title: titleInput.current.value,
          image: imgInput.current.value,
          date: Date(),
          description: descriptionInput.current.value,
          user: res,
        })
    );
    await axios.post("http://localhost:4000/story", storyInput);
  };

  const getUserId = async () => {
    const token = localStorage.getItem("token");
    var userId;
    try {
      await axios
        .get("http://localhost:4000/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => (userId = response.data._id));
    } catch (e) {
      console.log(e);
    }
    return userId;
  };

  return (
    <div>
      {isLoggedIn ? (
        <section className={classes.auth}>
          <h1>Create new Story</h1>
          <form>
            <div className={classes.control}>
              <label>Story Title</label>
              <input type="text" id="title" required ref={titleInput} />
            </div>
            <div className={classes.control}>
              <label htmlFor="img">Enter image URL</label>
              <input type="text" id="img" required ref={imgInput} />
            </div>
            <div>
              <div className={classes.control}>
                <label htmlFor="description">
                  Please enter story description
                </label>
                <input
                  type="text"
                  id="description"
                  required
                  ref={descriptionInput}
                />
              </div>
            </div>
            <div className={classes.actions}>
              <button onClick={createStory}>Create</button>
            </div>
          </form>
        </section>
      ) : (
        <h1>need to implement</h1>
      )}
    </div>
  );
};

export default NewStory;
