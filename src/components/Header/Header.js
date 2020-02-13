import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
        <img alt="" src='https://www.clipartmax.com/png/full/55-554689_file-arizona-coyotes-svg-arizona-coyotes-logo-png.png' />
        <div className={s.loginBlock}>
          {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}
          
        </div>
      </header>
    )
}

export default Header;