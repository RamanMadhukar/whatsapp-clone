import React, { useEffect, useState } from 'react'
import './App.css';
import Chat from './Components/Chat/Chat';
import Sidebar from './Components/Sidebar/Sidebar';
import Pusher from 'pusher-js'
import axios from './axios'

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    axios.get('/messages/sync')
      .then(responce => {
        // console.log(responce);
        setMessages(responce.data);
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('3822b630f6be9ca8b1ca', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <>
      <div className="app">

        <div className="app__body">
          <Sidebar />
          <Chat messages={messages} />
        </div>

      </div>

    </>
  );
}

export default App;
