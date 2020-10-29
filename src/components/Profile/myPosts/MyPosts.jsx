import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
  return (
    <div>
      <div className={classes.content__inner_posts}>
        <div className={classes.content__inner_header}>
          <h4>My Posts</h4>
        </div>
        <div className={classes.content__inner_input}>
          <textarea cols="num" rows="num" placeholder='Your News'></textarea>
        </div>
        <div className={classes.content__inner_send}>
          <button>Send</button>
        </div>
      </div>
      <div className={classes.Posts}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
};

export default MyPosts;