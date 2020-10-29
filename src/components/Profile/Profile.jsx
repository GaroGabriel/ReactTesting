import React from 'react';
import MyPosts from './myPosts/MyPosts';
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.content}>
      <div className={classes.content__inner}>
        <div className={classes.content__inner_cover}>
          <img src='https://www.sleekcover.com/covers/smile-black-facebook-cover.jpg'></img>
        </div>

        <div className={classes.content__inner_avatar}>
          <div className={classes.content__inner_pic}>
            <img src='https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png'></img>
          </div>
          <div className={classes.content__inner_info}>
            <h3>G. Gabrielyan</h3>

            <p>Date of birth: 2 Apr</p>
            <p>City: Yerevan</p>
            <p>Education: Good</p>
            <p>Web Site: http//something.com</p>

          </div>
        </div>
        <MyPosts />





      </div>
    </div>
  )
};

export default Profile;