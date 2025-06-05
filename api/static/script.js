document.getElementById('send-button').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        // Display user message
        var chatHistory = document.getElementById('chat-history');
        chatHistory.innerHTML += '<div class="user-message">' + userInput + '</div>';
        
        // Send to server
        fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        })
        .then(response => response.json())
        .then(data => {
            // Display bot response
            data.forEach(function(message) {
                chatHistory.innerHTML += '<div class="bot-message">' + message.text + '</div>';
            });
            // Scroll to bottom
            chatHistory.scrollTop = chatHistory.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
        // Clear input
        document.getElementById('user-input').value = '';
    }
});