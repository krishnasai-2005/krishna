// --- EXAM ENGINE (UPDATED WITH TIME) ---

let currentSubjectKey = localStorage.getItem('currentExamSubject');
let questions = [];
let currentQIndex = 0;
let userAnswers = new Array(10).fill(null);
let timerInterval;
let timeLeft = 600; // Default fallback

const TITLES = {
    'c_programming': 'C Programming', 'cpp_programming': 'C++ Programming',
    'java_core': 'Core Java', 'dbms': 'DBMS', 'web_tech': 'Web Technology',
    'os': 'Operating System', 'networks': 'Computer Networks',
    'cloud': 'Cloud Computing', 'ai': 'Artificial Intelligence', 'arch': 'Computer Architecture'
};

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Get Questions
    let allDynamic = JSON.parse(localStorage.getItem('dynamic_questions'));
    if (allDynamic && allDynamic[currentSubjectKey]) {
        questions = allDynamic[currentSubjectKey];
    } else if (QUESTION_BANK[currentSubjectKey]) {
        questions = QUESTION_BANK[currentSubjectKey];
    }

    // 2. Get Time Limit (New Feature)
    const timeSettings = JSON.parse(localStorage.getItem('exam_times')) || {};
    const minutes = timeSettings[currentSubjectKey] || 10; // Default to 10 mins if not set
    timeLeft = minutes * 60; // Convert to seconds

    // 3. Start Exam
    if(questions && questions.length > 0) {
        document.getElementById('subject-title').innerText = TITLES[currentSubjectKey] || 'Exam';
        userAnswers = new Array(questions.length).fill(null);
        initNavigator();
        loadQuestion(0);
        startTimer();
    } else {
        alert("No questions found!");
        window.location.href = 'student_dashboard.html';
    }
});

function initNavigator() {
    const grid = document.getElementById('nav-grid');
    grid.innerHTML = '';
    questions.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = 'nav-dot';
        dot.innerText = idx + 1;
        dot.id = `dot-${idx}`;
        dot.onclick = () => loadQuestion(idx);
        grid.appendChild(dot);
    });
}

function loadQuestion(index) {
    currentQIndex = index;
    const qData = questions[index];
    document.getElementById('q-number').innerText = index + 1;
    document.getElementById('q-text').innerText = qData.q;
    document.querySelectorAll('.nav-dot').forEach(d => d.classList.remove('active'));
    document.getElementById(`dot-${index}`).classList.add('active');

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    qData.options.forEach((opt, i) => {
        const btn = document.createElement('div');
        btn.className = `option-btn ${userAnswers[index] === i ? 'selected' : ''}`;
        btn.innerText = opt;
        btn.onclick = () => selectOption(i);
        container.appendChild(btn);
    });
}

function selectOption(optionIndex) {
    userAnswers[currentQIndex] = optionIndex;
    loadQuestion(currentQIndex);
    document.getElementById(`dot-${currentQIndex}`).classList.add('answered');
}

function prevQuestion() { if(currentQIndex > 0) loadQuestion(currentQIndex - 1); }
function nextQuestion() { if(currentQIndex < questions.length - 1) loadQuestion(currentQIndex + 1); }

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        document.getElementById('timer').innerText = `${m}:${s}`;
        
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam(true);
        }
    }, 1000);
}

function submitExam(autoSubmit = false) {
    if(!autoSubmit && !confirm("Submit Exam?")) return;
    clearInterval(timerInterval);
    let score = 0;
    questions.forEach((q, idx) => { if(userAnswers[idx] === q.ans) score += 10; });

    const user = JSON.parse(localStorage.getItem('currentUser'));
    const result = {
        subject: TITLES[currentSubjectKey] || currentSubjectKey,
        date: new Date().toLocaleDateString(),
        score: score,
        total: questions.length * 10
    };
    
    if(!user.history) user.history = [];
    user.history.push(result);
    localStorage.setItem('currentUser', JSON.stringify(user));

    const allUsers = JSON.parse(localStorage.getItem('users'));
    const idx = allUsers.findIndex(u => u.username === user.username);
    if(idx !== -1) {
        allUsers[idx].history = user.history;
        localStorage.setItem('users', JSON.stringify(allUsers));
    }

    alert(`Submitted! Score: ${score}/${result.total}`);
    window.location.href = 'student_results.html';
}