// --- AUTHENTICATION LOGIC ---

function toggleAuth(mode) {
    if (mode === 'register') {
        document.getElementById('login-box').style.display = 'none';
        document.getElementById('register-box').style.display = 'block';
    } else if (mode === 'login') {
        document.getElementById('login-box').style.display = 'block';
        document.getElementById('register-box').style.display = 'none';
    } else if (mode === 'admin') {
        document.getElementById('admin-modal').style.display = 'flex';
    }
}

function closeAdminModal() {
    document.getElementById('admin-modal').style.display = 'none';
}

function handleLogin(e) {
    e.preventDefault();
    const u = document.getElementById('l-user').value;
    const p = document.getElementById('l-pass').value;
    
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(acc => acc.username === u && acc.password === p);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'student_dashboard.html';
    } else {
        alert('Invalid Username or Password!');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const u = document.getElementById('r-user').value;
    const p = document.getElementById('r-pass').value;
    const email = document.getElementById('r-email').value;
    const mobile = document.getElementById('r-mobile').value;

    const users = JSON.parse(localStorage.getItem('users'));

    if (users.some(acc => acc.username === u)) {
        alert('Username already exists!');
        return;
    }

    // Register with FRESH DASHBOARD (Empty History)
    const newUser = {
        username: u,
        password: p,
        email: email,
        mobile: mobile,
        history: [], 
        theme: 'dark'
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration Successful! Please Login.');
    toggleAuth('login');
}

function handleAdminLogin(e) {
    e.preventDefault();
    const u = document.getElementById('a-user').value;
    const p = document.getElementById('a-pass').value;
    
    // Hardcoded Admin Check
    if (u === 'admin' && p === 'admin123') {
        window.location.href = 'admin_panel.html';
    } else {
        alert('Access Denied: Invalid Admin Credentials');
    }
}