import { Button } from 'react-bootstrap';
import React from 'react';
import { auth } from '../firebase';
import '../css/LogOut.css'

function LogOut() {
  return (
    <div>
          <Button className='log-out-button' onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  )
}

export default LogOut;