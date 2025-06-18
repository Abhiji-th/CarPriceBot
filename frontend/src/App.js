import { useState } from 'react';
import ChatBot from './components/ChatBot';

function App() {
  const [messages, setMessages] = useState([
    { text: 'Type \'Hi\' to start chat.', isBot: true }
  ]);

  // Function to test sending messages
  const handleSend = (text) => {
    console.log('Message sent:', text);
  };

  return (
    <div>
      <h1>Car Price Chatbot</h1>
      <ChatBot />
    </div>
  );
}

export default App;