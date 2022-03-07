import './App.css';
import Chat from './components/Chat';
import LogIn from './components/LogIn';
import {auth} from './firebase.js'
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? <Chat /> : <LogIn />}
    </>
  );
}

export default App;
