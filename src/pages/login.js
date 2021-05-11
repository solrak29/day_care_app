import React, {useEffect } from 'react'
import {useHistory} from 'react-router-dom';
import {firebaseDB, firebaseSignOn} from '../firebase';
import 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { login, selectLogin} from '../loginStatusSlice';
import '../styles/login.css'

export default function Login() {

    let history = useHistory();
    console.log('login status at login part');
    const dispatch = useDispatch();
    const loginStatus = useSelector(selectLogin);

    useEffect(() =>{
        if (loginStatus && loginStatus.value === true) {
            console.log('User is Already Authenticated');
            if (loginStatus.role === "client"){
                history.push('/client');
            } else {
                history.push('/admin');
            }
        } 
        console.log(`Login status is ${loginStatus}`);
        var db = firebaseDB();
        document.getElementById('submit').addEventListener("click",(e) => {
            e.preventDefault();
            let email = document.getElementById('email').value;
            let pass = document.getElementById('pwd').value;
            firebaseSignOn(email, pass).then((creds) => {
                let user = creds.user;
                console.log(`User email ${user.email}`);
                console.log('User was logged in');
                console.log('dispatched');
                db.collection("users").get(email).then((querry) => {
                    querry.forEach((doc) => {
                    var item = doc.data();
                    if ( email === item.email &&
                         item.role === 'client') {
                         dispatch(login([email,'client']));
                        history.push('/client');
                    } else {
                         dispatch(login([email,'admin']));
                        history.push('/admin');
                    }
                    console.log(item);
                });
                });
            })
            .catch((error) => {
                console.log(error);
            });
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
