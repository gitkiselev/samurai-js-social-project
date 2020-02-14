import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatus';
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
            <div>
                {/* <div>
                    <img className={s.headerimage} alt='' src='https://andrei-kiselev.ru/img/hs.jpg' />
                </div> */}
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large} alt="" />
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
            </div>
        
        
    )
}

export default ProfileInfo;