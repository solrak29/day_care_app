import React from 'react'
import {useEffect} from 'react'

import './login.css'

export default function Login() {

    useEffect(() =>{
        document.getElementById('submit').addEventListener("click",(e) => {
            e.preventDefault();
            console.log(document.getElementById('email').value);
            console.log(document.getElementById('pwd').value);
            window.history.pushState(null,'','admin');
            window.location.reload();
            //window.history.replaceState(null,'','admin');
        });
    },[]);

    return (
        <div class="login">
            <p class='email'><b>Email</b></p>
            <input type="email" id="email" name="email"></input>
            <p><b>Password</b></p>
            <input type="password" id="pwd" name="pwd"></input>
            <button id='submit'>Login</button>
        </div>
    )
}
