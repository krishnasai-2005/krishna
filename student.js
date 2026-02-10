// --- STUDENT LOGIC CONTROLLER ---

const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// 1. Security Check
if (!currentUser) {
    window.location.href = 'index.html';
}

// 2. Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    
    // -> Dashboard Logic (Only if on dashboard)
    if(document.getElementById('welcome-user')) {
        document.getElementById('welcome-user').innerText = currentUser.username;
        document.getElementById('nav-username').innerText = currentUser.username;
        if(currentUser.profilePic && document.getElementById('nav-profile-pic')) {
            document.getElementById('nav-profile-pic').src = currentUser.profilePic;
        }
        
        // Load Cards
        if(typeof loadCards === "function") {
            loadCards('practical-container', PRACTICALS, 'Practical');
            loadCards('theory-container', THEORY, 'Theory');
        }
    }

    // -> Profile Page Logic (Only if on profile page)
    if(document.getElementById('p-username-display')) {
        loadProfilePage();
    }
});


// --- PROFILE FUNCTIONS ---

function loadProfilePage() {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    // A. Generate Unique ID: Name + Last 4 Digits of Mobile
    // If no mobile, generate random digits
    let mobileSuffix = "0000";
    if (user.mobile && user.mobile.length >= 4) {
        mobileSuffix = user.mobile.slice(-4);
    } else {
        mobileSuffix = Math.floor(1000 + Math.random() * 9000); // Random 4 digit
    }
    const uniqueID = user.username.split(" ")[0].toUpperCase() + "-" + mobileSuffix;

    // B. Set Sidebar Info
    document.getElementById('p-username-display').innerText = user.username; // Full Name
    document.getElementById('p-id-display').innerText = "ID: " + uniqueID;
    if(user.profilePic) document.getElementById('p-image').src = user.profilePic;

    // C. Auto-Fill Read-Only Fields (From Registration)
    setVal('d-name', user.username);
    setVal('d-email', user.email || "Not Provided");
    setVal('d-mobile', user.mobile || "Not Provided");

    // D. Auto-Fill Editable Fields (From Saved Data)
    setVal('d-course', user.course || '');
    setVal('d-year', user.year || '');
    setVal('d-gender', user.gender || 'Select');

    // E. Load Exam History
    const list = document.getElementById('exam-history-list');
    const scoreDisplay = document.getElementById('overall-score');
    list.innerHTML = '';
    
    if(!user.history || user.history.length === 0) {
        list.innerHTML = '<div style="padding:20px; text-align:center; color:#94a3b8;">No exams taken yet.</div>';
        scoreDisplay.innerText = '0%';
    } else {
        let total = 0;
        user.history.forEach(h => {
            total += parseInt(h.score);
            const color = h.score >= 40 ? '#16a34a' : '#ef4444';
            list.innerHTML += `
                <div class="table-row">
                    <span>${h.subject}</span>
                    <span style="font-weight:bold;">${h.score}/100</span>
                    <span style="color:${color}; font-weight:bold;">${h.score >= 40 ? 'PASS' : 'FAIL'}</span>
                </div>
            `;
        });
        const avg = (total / (user.history.length * 100)) * 100;
        scoreDisplay.innerText = avg.toFixed(1) + "%";
    }
}

// --- EDIT & SAVE LOGIC ---
function enableEditMode() {
    // Unlock Fields
    document.getElementById('d-course').disabled = false;
    document.getElementById('d-year').disabled = false;
    document.getElementById('d-gender').disabled = false;

    // Show Save Button
    document.getElementById('btn-save').style.display = 'inline-flex';
    document.getElementById('btn-edit').style.display = 'none';
    
    // Focus first field
    document.getElementById('d-course').focus();
}

function saveProfileDetails() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const allUsers = JSON.parse(localStorage.getItem('users'));

    // Update User Object
    user.course = document.getElementById('d-course').value;
    user.year = document.getElementById('d-year').value;
    user.gender = document.getElementById('d-gender').value;

    // Save to LocalStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Update Main Database Array
    const idx = allUsers.findIndex(u => u.username === user.username);
    if(idx !== -1) {
        allUsers[idx].course = user.course;
        allUsers[idx].year = user.year;
        allUsers[idx].gender = user.gender;
        localStorage.setItem('users', JSON.stringify(allUsers));
    }

    // Reset UI
    document.getElementById('d-course').disabled = true;
    document.getElementById('d-year').disabled = true;
    document.getElementById('d-gender').disabled = true;
    document.getElementById('btn-save').style.display = 'none';
    document.getElementById('btn-edit').style.display = 'inline-flex';

    alert("Profile Updated Successfully!");
}

// --- IMAGE UPLOAD LOGIC ---
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64 = e.target.result;
            // Update UI
            document.getElementById('p-image').src = base64;
            
            // Save Data
            const user = JSON.parse(localStorage.getItem('currentUser'));
            user.profilePic = base64;
            localStorage.setItem('currentUser', JSON.stringify(user));

            const allUsers = JSON.parse(localStorage.getItem('users'));
            const idx = allUsers.findIndex(u => u.username === user.username);
            if(idx !== -1) {
                allUsers[idx].profilePic = base64;
                localStorage.setItem('users', JSON.stringify(allUsers));
            }
        };
        reader.readAsDataURL(file);
    }
}

// --- LOGOUT ---
function logout() {
    if(confirm("Logout from dashboard?")) {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
}

// Helper to safely set values
function setVal(id, val) {
    if(document.getElementById(id)) document.getElementById(id).value = val;
}