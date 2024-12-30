const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    displayMessage(message, "user");
    userInput.value = "";
    setTimeout(() => getBotResponse(message), 1000);
}

function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = sender === "user" ? "user-message" : "bot-message";
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    let botResponse = "I'm not sure how to help with that. Could you try rephrasing?";

    if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("anxiety")) {
        botResponse = "hi!";
    } else if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("anxiety")) {
        botResponse = "hello";
    } else if (lowerCaseMessage.includes("How") || lowerCaseMessage.includes("anxiety")) {
        botResponse = "I am fine. abd you?";
    } else if (lowerCaseMessage.includes("lonlyness") || lowerCaseMessage.includes("anxiety")) {
        botResponse = "I am here for listing you.";
    } else if (lowerCaseMessage.includes("alone") || lowerCaseMessage.includes("anxiety")) {
        botResponse = "I am with you.";
    }
    else if (lowerCaseMessage.includes("stress") || lowerCaseMessage.includes("anxiety")) {
        botResponse = "It sounds like you're feeling stressed. Try taking deep breaths, practicing mindfulness, or going for a walk.";
    } else if (lowerCaseMessage.includes("tired") || lowerCaseMessage.includes("sleep")) {
        botResponse = "If you're feeling tired, ensure you're getting enough sleep, stay hydrated, and avoid caffeine in the evening.";
    } else if (lowerCaseMessage.includes("exercise")) {
        botResponse = "Physical activity can reduce stress and improve mood. Try going for a run, doing yoga, or any exercise you enjoy.";
    } else if (lowerCaseMessage.includes("meditate") || lowerCaseMessage.includes("meditation")) {
        botResponse = "Meditation is a great way to relax. Start with just a few minutes a day, focusing on your breathing or using a guided meditation app.";
    }

    displayMessage(botResponse, "bot");
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
