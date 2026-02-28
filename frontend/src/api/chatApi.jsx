import axios from "axios";
import { useEffect } from "react";

const RASA_API = "http://localhost:5005/webhooks/rest/webhook"

export const sendMessage = (message) => {
    return axios.post(RASA_API, {
        sender: 'user',
        message: message,
    });
};