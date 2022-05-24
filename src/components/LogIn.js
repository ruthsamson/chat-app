import React from 'react';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase.js';
import {Button} from 'react-bootstrap';
import '../css/LogIn.css'
import chatIcon from '../css/images/chat-app-icon.png'

function LogIn() {
    function signIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <div>
      <img src={chatIcon} alt='logo' className='log-in-icon' />
      <div className='log-in-container'>
          <Button className='log-in-button' onClick={signIn}>Sign In With Email</Button>
      </div>
    </div>
  )
}

export default LogIn