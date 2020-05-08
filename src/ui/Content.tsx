import React, {useState} from "react";
import { Router, Route } from "react-router-dom";
import SignIn from "./content/SignIn";
import Registration from "./content/Registration";
import PasswordForgot from "./content/PasswordForgot";
import SetNewPassword from "./content/SetNewPassword";
import Neko from "./content/Neko";

const Content = (props:any) => {
    return(
        <>
            <Route path='/sign-in' render={()=><SignIn/>}/>
            <Route path='/register' render={()=><Registration/>}/>
            <Route path='/passwordForgot' render={()=><PasswordForgot/>}/>
            <Route path='/set-new-pass' render={()=><SetNewPassword/>}/>
            <Route path='/neko' render={()=><Neko/>}/>
        </>
    )
}
export default Content
