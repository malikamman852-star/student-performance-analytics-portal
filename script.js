// ================= LOGIN =================

function loginUser() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email==""){
        alert("Please enter your email.");
        return false;
    }

    if(password==""){
        alert("Please enter your password.");
        return false;
    }

    if(email=="admin@gmail.com" && password=="12345"){

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