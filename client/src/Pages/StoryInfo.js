import classes from "./StoryInfo.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

const Detail = (props) => {
  const [comments, setComments] = useState([]);
  const story = props.children;
  const isCloseHidden = false;

  useEffect(() => {
    const url = "http://localhost:4000/comment/";
    axios.get(url, { params: { storyID: story._id } }).then((res) => {
      setComments(res.data);
    });
  }, []);
  console.log(comments);

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
            {/* <div className="post-detail__reactions">
              <svg
                //onClick={toggleReaction}
                aria-label="Like"
                className="_8-yf5 "
                color="#8e8e8e"
                fill="#8e8e8e"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
              </svg>
              <svg
                //onClick={copyLink}
                aria-label="Share Post"
                className="_8-yf5 "
                color="#8e8e8e"
                fill="#8e8e8e"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
              </svg>
            </div> */}

            <div className="post-detail__number-of-reactions">
              {comments.map((comment) => {
                return <h1>{comment.description}</h1>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
