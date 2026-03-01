import React, { useEffect, useState, useRef } from 'react'
import {sendMessage} from '../api/chatApi'

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [currentSlot, setCurrentslot] = useState(null);
    const chatRef = useRef();

    const handleSend = async () => {
        if(!input) return;

        const userMsg = {sender: "user", text: input}
        setInput("");
        
        setMessages((prev) => [...prev, userMsg]);

        const res = await sendMessage(input);
        console.log(res.data);

        // setCurrentslot(res.data.slot);

        const botMessages = res.data.map((msg) => ({
            sender: "bot",
            text: msg.text,
            slot: msg.slot,
            type: msg.type,
        }));

        setMessages((prev) => [...prev, ...botMessages]);
    }

    useEffect(()=>{
        chatRef.current?.scrollIntoView({behaviour: "smooth"});
    }, [messages]);

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
            <div ref={chatRef}></div>
        </div>
        <input name="input" value = {input} onChange = {(e) => setInput(e.target.value)} /> 
        <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default ChatBot