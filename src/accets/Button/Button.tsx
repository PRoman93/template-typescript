import React from 'react'
import ReactDOM from 'react-dom'
import s from './Button.module.css'

const Button = (props: any) => {
    return (
        <>
            <button className={s.button}>{props.title}</button>
        </>
    )
}
export default Button
