import React, {useState} from 'react'
import {db, auth} from '../firebase'
import firebase from 'firebase/compat/app';
import { Form, FormControl, InputGroup, Button} from 'react-bootstrap'
import '../css/SendMessage.css'

function SendMessage() {
    const [msg, setMsg] = useState('')

    async function sendMessage(e){
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser

        await db.collection('messages').add({
            text: msg,
            photoURL, 
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
  return (
    <div>
        <Form className= 'form' onSubmit={sendMessage}>
            <InputGroup>
                <FormControl className='input-box' value={msg} type="text" onChange={(e) => {setMsg(e.target.value)}} placeholder='Message...'></FormControl>
                <Button className="send-button" type="submit">Send</Button>
            </InputGroup>
        </Form>
    </div>
  )
}

export default SendMessage