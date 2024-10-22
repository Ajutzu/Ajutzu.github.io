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
    freelance: `
      <ul>
          <li>
              <p>Static Websites</p>
              <p><strong>Price:</strong> 500 - 1000 pesos</p>
              <ul>
                  <li>Professional and visually appealing design</li>
                  <li>Responsive layout for various devices</li>
                  <p>   </p>
              </ul>
          </li>
          <li>
              <p>Dynamic Websites / Systems</p>
              <p><strong>Price:</strong> Varies based on requirements</p>
              <ul>
                  <li>Custom functionalities tailored to your needs</li>
                  <li>Database integration for dynamic content</li>
                  <li>Enhanced user experience and interactivity</li>
              </ul>
          </li>
      </ul>
  `,

    freelancer: `
      <ul>
          <li>
              <p>Static Websites</p>
              <p><strong>Price:</strong> 500 - 1000 pesos</p>
              <ul>
                  <li>Professional and visually appealing design</li>
                  <li>Responsive layout for various devices</li>
                  <p>   </p>
              </ul>
          </li>
          <li>
              <p>Dynamic Websites / Systems</p>
              <p><strong>Price:</strong> Varies based on requirements</p>
              <ul>
                  <li>Custom functionalities tailored to your needs</li>
                  <li>Database integration for dynamic content</li>
                  <li>Enhanced user experience and interactivity</li>
              </ul>
          </li>
      </ul>
  `,

    "your gay": "Im not gay im straight T_T",
    "aj gay": "Im not gay im straight T_T",
    "aj bading": "Im not gay im straight T_T",
    handsome: "Yes my creator is handsome",
    tanginamo: "tanginamo mo den hayop ka",
    ugly: "Nope Nope Nope",
    history: `
        <ul>
            <li>I started programming in high school with HTML and CSS.</li>
            <li>In senior high school, I began programming using Blockly during my work immersion.</li>
            <li>In my first year of college, I learned the basics of programming and some data structures in C++, along with flowcharting and pseudocode.</li>
            <li>In my second year of college, I learned the four pillars of Object-Oriented Programming (OOP) and how to implement them. I also studied relational databases (MySQL, PostgreSQL) and non-relational databases (MongoDB), and experimented with PHP, C#, Java, and Python at an entry level, including Tkinter.</li>
            <li>In my third year of college, I enhanced my skills in PHP, learned about APIs, and studied advanced HTML, CSS, Bootstrap, JavaScript, AJAX, and jQuery.</li>
        </ul>
    `,
  };

  userInput = userInput.toLowerCase().trim(); // Normalize input

  // Check if the input matches any of the keys in responses
  if (responses[userInput]) {
    return responses[userInput]; // Return the response if there's a direct match
  } else {
    return responses["default"]; // Default response if no match found
  }
}
