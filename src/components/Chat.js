import React, {useState, useEffect} from 'react'
import { db } from '../firebase'
import LogOut from './LogOut'
import SendMessage from './SendMessage'
import '../css/Chat.css'

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
      <div className='chat'>
          {messages.map(({id, text, photoURL}) => (
            <div className='reply-group' key={id}>
              <img src= {photoURL} alt="Profile pic" className='profile-pic' />
              <p className='reply'>{text}</p>
            </div>
          ))}
          <SendMessage />
        </div>
    </div>
  )
}

export default Chat;