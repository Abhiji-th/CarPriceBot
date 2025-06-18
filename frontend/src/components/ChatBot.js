import React, { useState } from 'react';
import axios from 'axios';
import ChatWindow from './ChatWindow';
import InputForm from './InputForm';

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: 'Type \'Hi\' to start chat.', isBot: true }
  ]);

  const handleSendMessage = async (userInput) => {
    // Add user message
    const userMessage = { text: userInput, isBot: false };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Send to Rasa
      const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
        sender: 'user',
        message: userInput,
      });

      // Add bot responses
      const botMessages = response.data.map((msg) => ({
        text: msg.text,
        isBot: true,
      }));
      setMessages((prev) => [...prev, ...botMessages]);
    } catch (error) {
      console.error('Error communicating with Rasa:', error);
      setMessages((prev) => [
        ...prev,
        { text: 'Sorry, I couldn’t connect to the server.', isBot: true },
      ]);
    }
  };

  return (
    <div
      style={{
        width: '350px',
        margin: '20px auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <ChatWindow messages={messages} />
      <InputForm onSendMessage={handleSendMessage} />
    </div>
  );
}

export default Chatbot;