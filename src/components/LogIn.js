import React from 'react';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase.js';
import {Button} from 'react-bootstrap';
import chatIcon from '../css/images/chat-app-icon.png'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function LogIn() {
    function signIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Log In</title>
          <link rel='stylesheet' href='./css/Login.css'/>
        </Helmet>
        <img src={chatIcon} alt='logo' className='log-in-icon' />
        <div className='log-in-container'>
            <Button className='log-in-button' onClick={signIn}>Sign In With Email</Button>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default LogIn