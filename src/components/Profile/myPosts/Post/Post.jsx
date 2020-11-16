import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.post__wrapper}>
      <div className={classes.post__img}>
        <img className={classes.post__img_avatar} src={props.img} alt="avatar" />
      </div>
      <div className={classes.post__text}>
        <div className={classes.post__autor}>
          <h5>{props.name}</h5>
        </div>
        <p>{props.text}</p>
        <span> <a href="#">{props.like}Like</a></span>
        <span> <a href="#">{props.dislike}Dislike</a></span>
      </div>


    </div>
  )
};

export default Post;