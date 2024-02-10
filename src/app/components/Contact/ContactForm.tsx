"use client"
import classes from '../../styles/_contactForm.module.sass'
import { MutableRefObject } from "react"
import {useRef} from 'react';
type InputRef = string | null
export const ContactForm = ():JSX.Element => {
    const nameInputRef = useRef() as MutableRefObject<HTMLInputElement>;
    const emailInputRef = useRef() as MutableRefObject<HTMLInputElement>;
    const phoneInputRef = useRef() as MutableRefObject<HTMLInputElement>;
    const messageInputRef = useRef() as MutableRefObject<HTMLInputElement>;
    const formSubmitionHandler = (event:React.FormEvent) =>{
        event.preventDefault();
        const enteredName:InputRef = nameInputRef.current.value;
        const enteredEmail:InputRef = emailInputRef.current.value;
        const enteredPhone:InputRef = phoneInputRef.current.value;
        const enteredMessage:InputRef = messageInputRef.current.value;
        console.log(enteredName, enteredEmail, enteredPhone, enteredMessage)
    }

    return (
            <form className={classes.form__wrapper} onSubmit={formSubmitionHandler}>
                <div className={classes.form__control}>
                    <label className={classes.form__label} htmlFor='name'> Twoje Imię</label>
                    <input className={classes.form__input} ref={nameInputRef} type='text' id='name' required/>
                </div>  
                <div className={classes.form__control}>
                    <label className={classes.form__label} htmlFor='phone'> Telefon</label>
                    <input className={classes.form__input} ref={phoneInputRef} type='tel' id='phone' pattern="[0-9]{9}" required/>
                </div>  
                <div className={classes.form__control}>
                    <label className={classes.form__label} htmlFor='email'> Email</label>
                    <input className={classes.form__input} ref={emailInputRef} type='email' id='email'  required/>
                </div>  
                <div className={`${classes.form__control} ${classes.form__control__message}`}>
                    <label className={classes.form__label} htmlFor='message'> Wiadomość</label>
                    <input className={`${classes.form__input} ${classes.form__input__message}`} ref={messageInputRef} type='text' id='message' required/>
                </div>  
                <div className={classes.form__action}>
                    <button className={classes.form__button} type='submit'>Napisz do mnie</button>
                </div>  
            </form>
    );
}