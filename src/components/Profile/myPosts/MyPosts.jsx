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
        <Post name='Jivan jan' text='last comment' img="https://www.pngkey.com/png/detail/303-3037888_boy-face-clipart-png.png" like='10 ' dislike='0 ' />

        <Post name='Վանուշ Խանամիրյան' text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ullam.' img='https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg' like='0 ' dislike='0 ' />

        <Post name='Գվուշ' text='some comment' img='https://freedesignfile.com/upload/2018/09/Cute-cartoon-pig-vector-design-03.jpg' like='10 ' dislike='100 ' />

        <Post name='Боря' text='first comment' img='https://pyxis.nymag.com/v1/imgs/702/026/aa739477c50efd82f2597a95d776a9331f-looney-tunes-ranking-bugs-bunny.rsquare.w700.jpg' like='200 ' dislike='0 ' />
      </div>
    </div>
  )
};

export default MyPosts;