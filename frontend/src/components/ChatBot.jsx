import React, { useEffect, useState, useRef } from "react";
import { sendMessage } from "../api/chatApi";
import { getCarData } from "../api/carApi";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [currentSlot, setCurrentSlot] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef();

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [fuel_types, setFuelTypes] = useState([]);
  const [transmission_types, setTransmissionTypes] = useState([]);
  const yearOptions = Array.from({ length: 25 }, (_, i) => 2000 + i);

  useEffect(() => {
    const handleCarData = async () => {
      try {
        const res = await getCarData();
        const data = res?.data || {};

        setBrands(data?.brands || []);
        setModels(data?.models || []);
        setFuelTypes(data?.fuel_types || []);
        setTransmissionTypes(data?.transmission_types || []);
      } catch (error) {
        console.log("Error fetching carData: ", error);
      }
    };
    handleCarData();
  }, []);

  const handleSend = async () => {
    if (!input) return;

    const userMsg = { sender: "user", text: input };
    setInput("");

    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);
    const res = await sendMessage(input);
    setIsTyping(false);

    res.data.forEach((msg) => {
      if (msg.text) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: msg.text,
          },
        ]);
      }
      if (msg.custom) {
        setCurrentSlot(msg.custom);
      }
    });
  };

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  return (
    <div>
      <div className="chatContainer">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.sender === "user" ? "userMessage" : "botMessage"}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && <div className="botMessage">typing...</div>}
        <div ref={chatRef}></div>
      </div>
      {currentSlot?.type === "dropdown" && (
        <select
          name="dropdowns"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        >
          <option>Select option</option>

          {currentSlot.slot === "brand" &&
            brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}

          {currentSlot.slot === "model" &&
            models.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}

          {currentSlot.slot === "fuel_type" &&
            fuel_types.map((fuel_type) => (
              <option key={fuel_type} value={fuel_type}>
                {fuel_type}
              </option>
            ))}

          {currentSlot.slot === "transmission_type" &&
            transmission_types.map((transmission_type) => (
              <option key={transmission_type} value={transmission_type}>
                {transmission_type}
              </option>
            ))}

          {currentSlot.slot === "year_of_manufacture" &&
            yearOptions.map((year_of_manufacture) => (
              <option key={year_of_manufacture} value={year_of_manufacture}>
                {year_of_manufacture}
              </option>
            ))}
        </select>
      )}
      {(currentSlot?.type === "number" || !currentSlot) && (
        <input
          name="staticInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        ></input>
      )}
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatBot;
