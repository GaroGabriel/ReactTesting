import React from 'react';

const Profile =()=>{
	return(
    <div className='content'>
    <div className='content__inner'>
      <div className='content__inner-cover'>
         <img src='https://theonsenresort.com/wp-content/uploads/2017/10/BACKGROUND-COVER-MENU-e1509364635171.jpg'></img>
      </div>

      <div className='content__inner-avatar'>
        <div className='content__inner-pic'>
          <img src='https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png'></img>
        </div>
        <div className='content__inner-info'>
          <h3>G. Gabrielyan</h3>
        
          <p>Date of birth: 2 Apr</p>
          <p>City: Yerevan</p>
          <p>Education: Good</p>
          <p>Web Site: http//something.com</p>

        </div>
      </div>
      <div className='content__inner-posts'>
        <div className='content__inner-header'>
          <h4>My Posts</h4>
        </div>
        <div className='content__inner-input'>
          <textarea cols="num" rows="num" placeholder='Your News'></textarea>
        </div>
        <div className='content__inner-send'>
          <button>Send</button>
        </div>
      </div>
    </div>
</div>
	)
};

export default Profile;