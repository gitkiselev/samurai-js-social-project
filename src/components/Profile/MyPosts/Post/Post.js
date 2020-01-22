import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    
    return (
        <div className={s.item}>
            <img className={s.avatarimg} alt='' src="https://andrei-kiselev.ru/img/ded.jpg" />
            {props.message}
    <div><span>like</span> {props.likesCount}</div>
            
            
        </div>
    )
}

export default Post;