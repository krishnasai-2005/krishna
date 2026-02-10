// --- CONFIGURATION & DATABASE ---
const PRACTICALS = ['Java', 'Program with C', 'C++', 'Python', 'Web Tech'];
const THEORY = ['Computer Architecture', 'Networks', 'AI', 'Cloud Computing', 'Software Eng.'];

const MOCK_QUESTIONS = [
    { q: "What is the output of 2+2 in Python?", options: ["4", "22", "Error", "None"], ans: "4" },
    { q: "Which tag is used for line break in HTML?", options: ["<lb>", "<br>", "<bk>", "<break>"], ans: "<br>" },
    { q: "Which language is known as the mother of all languages?", options: ["C", "Java", "Python", "Assembly"], ans: "C" },
    { q: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "None"], ans: "Cascading Style Sheets" }
];

// Initialize LocalStorage if empty
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify([]));
    // Admin user default
    if (!localStorage.getItem('admin')) localStorage.setItem('admin', JSON.stringify({user:'admin', pass:'admin123'}));
});