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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl h-[80vh] flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden mx-4">
        <div className="flex-grow overflow-auto p-4">
          <ChatWindow messages={messages} />
        </div>
        <div className="p-4 bg-gray-50 border-t">
          <InputForm onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default Chatbot;