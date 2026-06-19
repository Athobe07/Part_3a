const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const messageType = document.getElementById("messageType").value;
    const message = document.getElementById("contactMessage").value.trim();

    const result = document.getElementById("contactResult");

    result.innerHTML = "";

    const phonePattern = /^[0-9]{10}$/;

    if(fullName.length < 3){
        result.innerHTML = "<p class='error'>Enter a valid name.</p>";
        return;
    }

    if(!email.includes("@")){
        result.innerHTML = "<p class='error'>Enter a valid email.</p>";
        return;
    }

    if(!phonePattern.test(phone)){
        result.innerHTML =
        "<p class='error'>Phone number must contain 10 digits.</p>";
        return;
    }

    if(messageType === ""){
        result.innerHTML =
        "<p class='error'>Select a message type.</p>";
        return;
    }

    if(message.length < 20){
        result.innerHTML =
        "<p class='error'>Message must contain at least 20 characters.</p>";
        return;
    }

    result.innerHTML =
    `<p class="success">
        Thank you ${fullName}. Your ${messageType.toLowerCase()}
        has been received by the Transport Office.
    </p>`;

    contactForm.reset();

});