const messages = [
    "I'm sorry! 😔",
    "Please forgive me? 🥺",
    "You're the best thing in my life, and I don't want to upset you. 💕"
];

let messageIndex = 0;

function nextMessage() {
    const messageElement = document.getElementById("message");
    const button = document.getElementById("nextButton");

    if (messageIndex < messages.length) {
        messageElement.textContent = messages[messageIndex];
        messageIndex++;
    } else {
        messageElement.style.display = "none";
        button.style.display = "none";
        document.getElementById("forgiveness").style.display = "block";
    }
}

function respond(forgive) {
    const forgivenessDiv = document.getElementById("forgiveness");
    const responseElement = document.getElementById("response");

    forgivenessDiv.style.display = "none";

    if (forgive) {
        responseElement.textContent = "Yay! Thank you! You're the best! 🌟🥰";
        responseElement.style.color = "#4caf50";
    } else {
        responseElement.textContent = "Oh no! 😢 I'll try harder to make it up to you!";
        responseElement.style.color = "#f44336";
    }

    responseElement.style.display = "block";
}