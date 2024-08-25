function openChat() {
    document.getElementById("chatPopup").style.display = "block";
}

function closeChat() {
    document.getElementById("chatPopup").style.display = "none";
}

function sendMessage() {
    var inputField = document.getElementById("chatInput");
    var message = inputField.value;
    if (message.trim() !== "") {
        var chatBody = document.getElementById("chatBody");
        var newMessage = document.createElement("p");
        newMessage.textContent = "You: " + message;
        chatBody.appendChild(newMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
        inputField.value = "";
    }
}

document.getElementById("chatInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
        event.preventDefault(); // Prevents the default action of adding a new line
    }
})

