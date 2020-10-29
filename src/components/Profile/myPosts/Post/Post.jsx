import React from 'react';
import classes from './Post.module.css'

const Post = () => {
  return (
    <div className={classes.post__wrapper}>
      <div className={classes.post__img}>
        <img className={classes.post__img_avatar} src="https://www.pngkey.com/png/detail/303-3037888_boy-face-clipart-png.png" alt="avatar" />
      </div>
      <div className={classes.post__text}>
        <div className={classes.post__autor}>
          <h5>Jivan Jan</h5>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti iste corrupti voluptate, cupiditate iusto rem corporis consequatur ullam laboriosam enim.</p>
        <span> <a href="#">Like</a></span>
        <span> <a href="#">Dislike</a></span>
      </div>


    </div>
  )
};

export default Post;