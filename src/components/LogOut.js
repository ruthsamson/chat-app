import { Button } from 'react-bootstrap';
import React from 'react';
import { auth } from '../firebase';

function LogOut() {
  return (
    <div>
        <Button onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  )
}

export default LogOut;