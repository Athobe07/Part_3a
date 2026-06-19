const joinBtn = document.getElementById("joinBtn");
const joinFormContainer = document.getElementById("joinFormContainer");

joinBtn.addEventListener("click", function() {

    if(joinFormContainer.style.display === "none"){
        joinFormContainer.style.display = "block";
    } else {
        joinFormContainer.style.display = "none";
    }

});

const joinForm = document.getElementById("joinForm");

joinForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const number = document.getElementById("studentNumber").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const area = document.getElementById("pickupArea").value;

    const response = document.getElementById("joinResponse");

    response.innerHTML = "";

    if(name.length < 3){
        response.innerHTML =
        "<p class='error'>Please enter a valid full name.</p>";
        return;
    }

    if(number.length < 5){
        response.innerHTML =
        "<p class='error'>Please enter a valid student number.</p>";
        return;
    }

    if(!email.includes("@")){
        response.innerHTML =
        "<p class='error'>Please enter a valid email address.</p>";
        return;
    }

    if(area === ""){
        response.innerHTML =
        "<p class='error'>Please select a pickup area.</p>";
        return;
    }

    response.innerHTML =
    `<p class="success">
        Registration successful! Welcome ${name}. We will contact you regarding transport from ${area}.
    </p>`;

    joinForm.reset();

});