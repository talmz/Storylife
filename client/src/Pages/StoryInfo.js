import classes from "./StoryInfo.module.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import LikeButton from "../UI/LikeButton";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

const StoryInfo = (props) => {
  const api_url = process.env.REACT_APP_API_URL

  const [comments, setComments] = useState([]);
  const story = props.children;
  const isCloseHidden = false;
  const commentText = useRef();

  const updateComments = async () => {
    const url = api_url + "/comment";
    await axios.get(url, { params: { storyID: story._id } }).then((res) => {
      setComments(res.data);
    });
  };

  useEffect(() => {
    updateComments();
  }, []);

  const postComment = async () => {
    const comment = {
      description: commentText.current.value,
      storyID: story._id,
    };
    const token = localStorage.getItem("token");
    await axios.post(api_url + "/comment/", comment, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    updateComments();
    commentText.current.value = "";
  };

  return (
    <div className={classes.postDetail}>
      <div className={classes.postDetailContent}>
        <div className={classes.postDetailContainer}>
          {!isCloseHidden && (
            <div className={classes.postDetailClose}>
              <svg onClick={props.func} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        <div className={classes.postDetailMain}>
          <div className={classes.postDetailMainLeft}>
            <img src={story.image} />
          </div>
          <div className={classes.postDetailMainRight}>
            <div className={classes.postDetailCreator}>
              <div className={classes.profile}>
                <span className={classes.letter}>
                  {props.children.user.firstName[0] +
                    props.children.user.lastName[0]}
                </span>
              </div>
              <span
                className={classes.postDetailPostCreator}
                //onClick={viewProfile}
              >
                {story.user.firstName + " " + story.user.lastName}
              </span>
              {/* {user.id !== post?.post_created_by && (
                <div className="post-detail__dot"></div>
              )}
              {user.id !== post?.post_created_by && (
                <span
                  className="post-detail__follow"
                  //onClick={toggleFollow}
                >
                  {post?.hasFollowed ? "Followed" : "Follow"}
                </span>
              )} */}
            </div>

            <div className={classes.postDetailComments}>
              {comments.map((comment) => {
                return <h1>{comment.description}</h1>;
              })}
            </div>
            <div className={classes.postDetailAddComment}>
              <textarea placeholder="Add Comment" ref={commentText}></textarea>
              <button onClick={postComment}>Post</button>
            </div>
            <div>
              <LikeButton></LikeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoryInfo;
