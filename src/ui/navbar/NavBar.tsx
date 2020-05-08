import React from "react";
import {Link, NavLink} from "react-router-dom";
import s from '../navbar/NavBar.module.css'

const NavBar = (props:any) => {
    return(
        <div className={s.navMenu}>
            <NavLink to={'sign-in'}>sign-in</NavLink>
            <NavLink to={'register'}>register</NavLink>
            <NavLink to={'passwordForgot'}>forgot</NavLink>
            <NavLink to={'set-new-pass'}>set new pass</NavLink>
            <NavLink to={'neko'}>neko</NavLink>
            </div>
    )
}
export default NavBar
