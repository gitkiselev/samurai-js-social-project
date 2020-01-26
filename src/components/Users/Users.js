import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/rr.jpg';
import {v4} from 'uuid';
import {NavLink} from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>        
                <div>
                    {pages.map(p => {
                        return <span key={v4()} className={props.currentPage === p ? styles.selectedPage : styles.page} 
                        onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {
                    
                    props.users.map(u => <div key={u.id}>
                                            <span>
                                                <div className={styles.userPhotoContainer}>
                                                    <NavLink to={'/profile/' + u.id}>
                                                        <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                                                    </NavLink>
                                                </div>
                                                <div>
                                                    {u.followed ?
                                                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                                        props.unfollow(true, u.id);
                                                        
                                                        }}>Unfollow</button>:
                                                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                                        props.follow(true, u.id)
                                                        
                                                        }}>Follow</button>}
                                                </div>
                                            </span>
                                        <span>
                                            <span>
                                                <div>{u.name}</div>
                                                <div>{u.status}</div>
                                            </span>
                                            <span>
                                                <div>{'user.location.city'}</div>
                                                <div>{'user.location.country'}</div>
                                            </span>
                                        </span>
                                    </div>)
                    }
                </div>
            
            
}
                 

export default Users;