import React, { useState } from 'react';

function InputForm({ onSendMessage }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim()); // Send input to parent
      setInput(''); // Clear input
    }
  };

  return (
    <div className='fixed bg-gray-100 bottom-5 w-full '>
    <form
      onSubmit={handleSubmit}
      className=" flex p-2 bg-white shadow-md rounded-full border border-gray-300 gap-3"
      >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 px-3 py-2 rounded-full mr-2 outline-none focus:ring-2 focus:ring-blue-500"
        />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
        Send
      </button>
    </form>
    </div>
  );
}

export default InputForm;