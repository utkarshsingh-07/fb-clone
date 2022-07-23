import { Button } from '@mui/material'
import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase";
import {signInWithPopup } from "firebase/auth";
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer";

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn =() => {
        //signin function
       signInWithPopup(auth,provider)
        .then((result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })

            //console.log(result.user);
        })
        .catch((error) => {
            alert(error.message);
        })
    }
  return (
    <div className='login'>
        <div className="login__logo">
            <img src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-768x480.png'
            alt=''/>
            <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'
            alt='' />
        </div>
        <Button type='submit' onClick={signIn}>
            Sign In
        </Button>
    </div>
  )
}

export default Login