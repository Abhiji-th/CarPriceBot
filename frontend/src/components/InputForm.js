import React, { useState } from 'react';

function InputForm({ onSendMessage }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input); // Send input to parent
      setInput(''); // Clear input
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        padding: '10px',
        backgroundColor: '#fff',
        borderTop: '1px solid #ccc',
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginRight: '8px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Send
      </button>
    </form>
  );
}

export default InputForm;