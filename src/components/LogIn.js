import React from 'react';
import firebase from 'firebase/compat/app';
import {auth} from '../firebase.js';
import {Button} from 'react-bootstrap';

function LogIn() {
    function signIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <div>
        <Button onClick={signIn}>Sign In With Email</Button>
    </div>
  )
}

export default LogIn