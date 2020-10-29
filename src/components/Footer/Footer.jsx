import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={style.footer}>
			<div className={style.container}>
				<div className={style.footer__LeftSide}>
					<p>here is some text for left side of my ugly footer</p>

					<input type="e-mail" placeholder="your@Email.com"></input>
					<button>Subscribe</button>
				</div>
				<div className={style.footer__RightSide}>
					<ul>
						<li><a href="#">Community</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Forums</a></li>
						<li><a href="#">Meetups</a></li>
					</ul>
				</div>
			</div>
		</footer >
	)
};

export default Footer;