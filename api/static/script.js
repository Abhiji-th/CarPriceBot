document.getElementById('send-button').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        // Display user message
        var chatHistory = document.getElementById('chat-history');
        chatHistory.innerHTML += '<div class="user-message">' + userInput + '</div>';
        
        // Scroll to bottom
        chatHistory.scrollTop = chatHistory.scrollHeight;

        // Send to Flask server
        fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Display bot response
            if (data && Array.isArray(data)) {
                data.forEach(function(message) {
                    if (message.text) {
                        chatHistory.innerHTML += '<div class="bot-message">' + message.text + '</div>';
                    }
                });
            } else {
                chatHistory.innerHTML += '<div class="bot-message">No response from bot.</div>';
            }
            // Scroll to bottom
            chatHistory.scrollTop = chatHistory.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
            chatHistory.innerHTML += '<div class="bot-message">Error communicating with the bot.</div>';
            chatHistory.scrollTop = chatHistory.scrollHeight;
        });
        
        // Clear input
        document.getElementById('user-input').value = '';
    }
});

// Optional: Add Enter key support
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});