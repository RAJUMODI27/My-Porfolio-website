
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill out all fields.");
        return false;
    }

    
    alert("Your query was successfully sent!");
    return true;
}



function addPadding(isPadding) {
    var form = document.getElementById("contactForm");
    if (isPadding) {
        form.style.transition = "padding 0.3s ease, background 0.3s ease"
        form.style.padding = "20px";
        form.style.background="rgba(255, 255, 255, 0.1)";
        

    } else {
        form.style.transition = "padding 0.3s ease, background 0.3s ease";
        form.style.padding = '0px';
        form.style.background="none";
    }
}


