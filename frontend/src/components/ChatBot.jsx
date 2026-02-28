import React, { useState } from 'react'
import {sendMessage} from '../api/chatApi'

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = async () => {
        if(!input) return;

        const userMsg = {sender: "user", text: input}
        setInput("");
        
        setMessages((prev) => [...prev, userMsg]);

        const res = await sendMessage(input);

        const botMessages = res.data.map((msg) => ({
            sender: "bot",
            text: msg.text,
        }));

        setMessages((prev) => [...prev, ...botMessages]);
    }

  return (
    <div>
        <div>
            {
                messages.map((msg, i) => (
                    <p key={i}>
                        <b>{msg.sender}:</b> {msg.text}
                    </p>
                ))
            }
        </div>
        <input name="input" value = {input} onChange = {(e) => setInput(e.target.value)} /> 
        <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default ChatBot