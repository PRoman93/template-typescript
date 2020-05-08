import React from "react";
import s from "./Link.module.css"

type PropsType = {
    title:string
}
const Link = (props:PropsType) => {
    return(
        <div><a href='#' className={s.link}>{props.title}</a></div>
    )
}
export default Link
