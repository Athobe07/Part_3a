const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const enquiryType = document.getElementById("enquiryType").value;
    const message = document.getElementById("message").value.trim();

    const result = document.getElementById("response");

    result.innerHTML = "";

    if(name.length < 3){
        result.innerHTML = "<p class='error'>Name must contain at least 3 characters.</p>";
        return;
    }

    if(!email.includes("@")){
        result.innerHTML = "<p class='error'>Enter a valid email address.</p>";
        return;
    }

    if(enquiryType === ""){
        result.innerHTML = "<p class='error'>Please select an enquiry type.</p>";
        return;
    }

    if(message.length < 10){
        result.innerHTML = "<p class='error'>Message must contain at least 10 characters.</p>";
        return;
    }

    let response = "";

    switch(enquiryType){

        case "fees":
            response = "Current monthly transport fee is R850.";
            break;

        case "route":
            response = "Bus route information will be sent to your email.";
            break;

        case "availability":
            response = "Seats are currently available on selected routes.";
            break;

        case "special":
            response = "Your special transport request has been submitted.";
            break;
    }

    result.innerHTML =
    `<p class="success">
        Thank you ${name}. ${response}
    </p>`;

    enquiryForm.reset();

});