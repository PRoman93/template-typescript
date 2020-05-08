import React from 'react'
import s from './Input.module.css'

const Input = (props: any) => {
    return (
        <div>
            <input type={props.type} id="dynamic-label-input" placeholder={props.placeholder} className={s.input}/>
        </div>
    )
}
export default Input
