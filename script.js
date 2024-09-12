// JavaScript to toggle the popup menu when the 3 dots are clicked
document.getElementById('menu-icon').addEventListener('click', function() {
    const navPopup = document.getElementById('nav-popup');
    navPopup.style.display = navPopup.style.display === 'flex' ? 'none' : 'flex';
});
// JavaScript for Chatbot Functionality
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChatbot = document.getElementById('close-chatbot');
const sendChatbotMessage = document.getElementById('send-chatbot-message');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotMessages = document.getElementById('chatbot-messages');

chatbotIcon.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
    chatbotIcon.style.display = 'none';
});

closeChatbot.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
    chatbotIcon.style.display = 'flex';
});

sendChatbotMessage.addEventListener('click', () => {
    const message = chatbotInput.value.trim();
    if (message) {
        appendMessage('user', message);
        chatbotInput.value = '';
        // Simulate bot response (replace with actual chatbot integration)
        setTimeout(() => {
            appendMessage('bot', 'Thank you for your message. How can I assist you?');
        }, 1000);
    }
});

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', sender);
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;
    messageElement.appendChild(messageContent);
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
//  <!--Login pop -->
document.getElementById('Loginp').addEventListener('click', function() {
    const loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = 'flex'; // Show the popup
});

document.getElementById('close-popup').addEventListener('click', function() {
    const loginPopup = document.getElementById('login-popup');
    loginPopup.style.display = 'none'; // Hide the popup
});

// Optional: Close popup when clicking outside of it
window.addEventListener('click', function(event) {
    const loginPopup = document.getElementById('login-popup');
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none'; // Hide the popup
    }
});

document.getElementById('Languagep').addEventListener('click', function() {
    const languagePopup = document.getElementById('language-popup');
    languagePopup.style.display = 'flex'; // Show the language selection popup
});

document.getElementById('close-language-popup').addEventListener('click', function() {
    const languagePopup = document.getElementById('language-popup');
    languagePopup.style.display = 'none'; // Hide the popup
});

// Language change logic
const languageButtons = document.querySelectorAll('.language-btn');
const siteName = document.getElementById('site-name');

const translations = {
    en: {
        siteName: "Crop AI",
    },
    hi: {
        siteName: "फसल एआई",
    },
    or: {
        siteName: "କ୍ରପ୍ ଏଆଇ",
    }
};

// Handle language selection
languageButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const selectedLang = e.target.getAttribute('data-lang');
        siteName.innerText = translations[selectedLang].siteName;

        // Close the popup after selecting the language
        document.getElementById('language-popup').style.display = 'none';
    });
});
// Sign Up Popup Elements
const openSignUpBtn = document.getElementById('openSignUp');
const signUpPopup = document.getElementById('signUpPopup');
const closeSignUpBtn = document.getElementById('closeSignUp');

// Login Popup Elements (Assuming you have one)
// const openLoginBtn = document.getElementById('openLogin');
// const loginPopup = document.getElementById('loginPopup');
// const closeLoginBtn = document.getElementById('closeLogin');

// Toggle to Login from Sign Up
const switchToLoginLink = document.getElementById('switchToLogin');

// Open Sign Up Popup
openSignUpBtn.addEventListener('click', () => {
    signUpPopup.style.display = 'flex';
});

// Close Sign Up Popup
closeSignUpBtn.addEventListener('click', () => {
    signUpPopup.style.display = 'none';
});

// Close popup when clicking outside the content
window.addEventListener('click', (e) => {
    if (e.target === signUpPopup) {
        signUpPopup.style.display = 'none';
    }
    // If you have a login popup
    if (e.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
});

// Switch to Login Popup from Sign Up
if (switchToLoginLink) {
    switchToLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signUpPopup.style.display = 'none';
        loginPopup.style.display = 'flex';
    });
}
