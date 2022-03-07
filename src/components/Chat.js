import React, {useState, useEffect} from 'react'
import { db } from '../firebase'
import LogOut from './LogOut'
import SendMessage from './SendMessage'

function Chat() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])
  return (
    <div>
        <LogOut />
        {messages.map(({id, text, photoURL}) => (
          <div key={id}>
            <img src= {photoURL} alt="Profile pic" />
            <p>{text}</p>
          </div>
        ))}
        <SendMessage />
    </div>
  )
}

export default Chat;