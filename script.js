// ================= LOGIN =================


function loginUser() {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if(email==""){
        alert("Please enter your email.");
        return false;
    }

    if(password==""){
        alert("Please enter your password.");
        return false;
    }

    let user = JSON.parse(localStorage.getItem("studentUser"));

    if(user==null){
        alert("No account found. Please register first.");
        window.location.href="register.html";
        return false;
    }

    if(email==user.email && password==user.password){

        alert("Login Successful!");

        window.location.href="dashboard.html";

        return false;

    }

    alert("Invalid Email or Password");

    return false;
}


// ================= DASHBOARD =================

window.onload=function(){

    if(document.getElementById("students")){

        document.getElementById("students").innerHTML="120";

        document.getElementById("teachers").innerHTML="18";

        document.getElementById("courses").innerHTML="10";

        document.getElementById("attendance").innerHTML="95%";

    }

}



// ================= SEARCH =================

function searchStudent(){

    let input=document.getElementById("search").value.toLowerCase();

    let table=document.getElementById("studentTable");

    let tr=table.getElementsByTagName("tr");

    for(let i=1;i<tr.length;i++){

        let td=tr[i].getElementsByTagName("td")[1];

        if(td){

            let txt=td.textContent || td.innerText;

            if(txt.toLowerCase().indexOf(input)>-1){

                tr[i].style.display="";

            }

            else{

                tr[i].style.display="none";

            }

        }

    }

}
// ==============================
// Register User (Week 3)
// ==============================

function registerUser() {

    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value.trim();

    if(name==""){
        alert("Please enter your name.");
        return false;
    }

    if(email==""){
        alert("Please enter your email.");
        return false;
    }

    if(password==""){
        alert("Please create a password.");
        return false;
    }

    let user = {

        name:name,
        email:email,
        password:password

    };

    localStorage.setItem("studentUser", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href="login.html";

    return false;

}
// ==============================
// Forgot Password
// ==============================

function forgotPassword(){

    let email = document.getElementById("forgotEmail").value.trim();

    let user = JSON.parse(localStorage.getItem("studentUser"));

    if(user==null){

        alert("No account found!");

        return false;

    }

    if(email==user.email){

        alert("Email Verified!");

        window.location.href="reset-password.html";

        return false;

    }

    alert("Email not found!");

    return false;

}
// ==============================
// Reset Password
// ==============================

function resetPassword(){

    let newPassword=document.getElementById("newPassword").value.trim();

    let user=JSON.parse(localStorage.getItem("studentUser"));

    if(user==null){

        alert("No account found!");

        return false;

    }

    user.password=newPassword;

    localStorage.setItem("studentUser",JSON.stringify(user));

    alert("Password Reset Successfully!");

    window.location.href="login.html";

    return false;

}
// ==============================
// Student Profile
// ==============================

window.addEventListener("load", function () {

    let user = JSON.parse(localStorage.getItem("studentUser"));

    if (user && document.getElementById("profileName")) {

        document.getElementById("profileName").innerHTML = user.name;

        document.getElementById("profileEmail").innerHTML = user.email;

    }

});
// ==============================
// Student Performance Cards
// ==============================

const students = [

    {
    name:"Ali",
    marks:90,
    grade:"A"
    },
    
    {
    name:"Sara",
    marks:82,
    grade:"A"
    },
    
    {
    name:"Ahmed",
    marks:75,
    grade:"B"
    },
    
    {
    name:"Ayesha",
    marks:68,
    grade:"C"
    },
    
    {
    name:"Zain",
    marks:95,
    grade:"A+"
    }
    
    ];
    
    function loadStudents(list){
    
    let container=document.getElementById("studentCards");
    
    if(!container) return;
    
    container.innerHTML="";
    
    list.forEach(function(student){
    
    container.innerHTML +=`
    
    <div class="card">
    
    <h2>${student.name}</h2>
    
    <p><strong>Marks:</strong> ${student.marks}</p>
    
    <p><strong>Grade:</strong> ${student.grade}</p>
    
    </div>
    
    `;
    
    });
    
    }
    
    window.addEventListener("load",function(){
    
    loadStudents(students);
    
    });
    
    function searchStudent(){
    
    let text=document.getElementById("search").value.toLowerCase();
    
    let filtered=students.filter(function(student){
    
    return student.name.toLowerCase().includes(text);
    
    });
    
    loadStudents(filtered);
    
    }
    // ==============================
// Sorting
// ==============================

function sortAZ(){

    let sorted=[...students];
    
    sorted.sort(function(a,b){
    
    return a.name.localeCompare(b.name);
    
    });
    
    loadStudents(sorted);
    
    }
    
    function sortMarks(){
    
    let sorted=[...students];
    
    sorted.sort(function(a,b){
    
    return b.marks-a.marks;
    
    });
    
    loadStudents(sorted);
    
    }
    // ==============================
// Logout
// ==============================

fun
