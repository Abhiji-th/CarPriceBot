import { useEffect, useRef } from 'react';

function ChatWindow({ messages }) {
  const endOfMessagesRef = useRef(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
      <div className="flex flex-col p-4 space-y-3 overflow-y-auto text-gray-900 pb-24">
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
  );
}

export default ChatWindow;