import React, { useEffect, useRef } from 'react';

function ChatWindow({ messages }) {
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        height: '300px',
        overflowY: 'scroll',
        backgroundColor: '#f9f9f9',
      }}
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: msg.isBot ? 'flex-start' : 'flex-end',
            marginBottom: '10px',
          }}
        >
          <div
            style={{
              maxWidth: '70%',
              padding: '8px 12px',
              borderRadius: '10px',
              backgroundColor: msg.isBot ? '#e0e0e0' : '#007bff',
              color: msg.isBot ? '#000' : '#fff',
              wordBreak: 'break-word',
            }}
          >
            <p style={{ margin: 0 }}>{msg.text}</p>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatWindow;