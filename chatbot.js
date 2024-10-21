// Chat Bot

// Toggle chat box visibility
function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
}

// Handle form submission
function handleSubmit() {
    const userInput = document.getElementById("userInput").value;
    const response = getResponse(userInput);
    displayMessage(userInput, "user");
    displayMessage(response, "bot");
    document.getElementById("userInput").value = ""; // Clear input
    return false; // Prevent form submission
}

// Display message in chat
function displayMessage(message, sender) {
    const chatBody = document.getElementById("chatBody");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    
    // Set class based on sender
    if (sender === "user") {
        messageElement.className = "user-message"; // Add user message class
        messageElement.innerHTML = `<i class="fas fa-user" style="margin-right: 5px;"></i>${message}`; // Add user icon
    } else {
        messageElement.className = "bot-message"; // Add bot message class
        messageElement.innerHTML = `<i class="fa-solid fa-robot" style="margin-right: 5px;"></i>${message}`; // Add bot icon
    }

    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
}

// Generate chatbot response based on user input
function getResponse(userInput) {
    const responses = {
        hello: "Hello!",
        hi: "Hello!",
        hey: "Hello!",
        thankyou: "You're welcome!",
        new: "Yes, I am new. This is my first version, and I'm waiting to be upgraded.",
        tell: "I am a bot, and this is my first version, and I'm waiting to be upgraded.",
        bye: "See you!",
        how: "I'm doing fine, and you?",
        default: "Could you please rephrase that?",
        "what are you offering":
            "I offer freelance services for creating static websites starting at 500 pesos. For dynamic websites or systems, the price varies depending on the complexity of the system.",
        freelance:
            "I can build static websites for 500-1000 pesos, and dynamic websites or systems will vary based on your requirements.",
    };

    userInput = userInput.toLowerCase().trim();
    for (const key in responses) {
        if (userInput.includes(key)) {
            return responses[key];
        }
    }
    return responses["default"]; // Default response if no match found
}
