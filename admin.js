// --- ADMIN DASHBOARD LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    // Check Auth (Simple check)
    // In real app, check a specific admin token
    
    loadAdminData();
    
    // Render Question Paper Buttons
    const papersDiv = document.getElementById('admin-papers');
    [...PRACTICALS, ...THEORY].forEach(sub => {
        papersDiv.innerHTML += `
            <div class="subject-card glass-panel" style="padding:15px;">
                <h4>${sub}</h4>
                <button class="btn-3d" style="margin-top:10px; font-size:0.8rem;" onclick="openEditModal('${sub}')">Edit Questions</button>
            </div>
        `;
    });
});

function loadAdminData() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tbody = document.getElementById('student-table-body');
    
    // Stats
    document.getElementById('total-students').innerText = users.length;
    let totalExams = 0;
    
    tbody.innerHTML = '';
    
    users.forEach((u, index) => {
        totalExams += u.history.length;
        
        tbody.innerHTML += `
            <tr>
                <td>${u.username}</td>
                <td>${u.email}</td>
                <td>${u.mobile}</td>
                <td>${u.history.length} Exams</td>
                <td>
                    <button class="btn-3d btn-danger" style="padding:5px 10px; font-size:0.7rem;" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
    
    document.getElementById('total-exams').innerText = totalExams;
}

function deleteStudent(index) {
    if(confirm("Are you sure you want to delete this student and all their data?")) {
        const users = JSON.parse(localStorage.getItem('users'));
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        loadAdminData(); // Refresh table
    }
}

// Mock Edit Modal
function openEditModal(subject) {
    document.getElementById('edit-subject-title').innerText = `Edit ${subject} Questions`;
    document.getElementById('edit-modal').style.display = 'flex';
}

function closeEditModal() {
    document.getElementById('edit-modal').style.display = 'none';
}

function logout() {
    window.location.href = 'index.html';
}