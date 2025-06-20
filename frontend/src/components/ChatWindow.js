import { useEffect, useRef } from 'react';

function ChatWindow({ messages }) {
  const endOfMessagesRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="rounded-xl bg-white shadow-lg h-full flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-xl">
        <h2 className="text-lg font-semibold">Chatbot</h2>
      </div>

      {/* Messages Area */}
      <div className="flex-grow flex flex-col p-4 space-y-3 overflow-y-auto text-gray-900">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-xs px-4 py-2 rounded-lg ${
              msg.isBot
                ? "bg-gray-200 self-start"
                : "bg-blue-100 self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {/* Invisible marker to scroll into view */}
        <div ref={endOfMessagesRef} />
      </div>
    </div>

  );
}

export default ChatWindow;