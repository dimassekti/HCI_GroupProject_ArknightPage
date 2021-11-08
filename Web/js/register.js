function checkName() {
    var name = document.getElementById("username");

    if (name.value.length < 3) {
        name.setCustomValidity("Username must be at least 3 characters long!");
    }
    else {
        name.setCustomValidity("");
    }
}


function checkPassword() {
    var pass = document.getElementById("password");

    if (pass.value.length < 6) {
        pass.setCustomValidity("Password must be at least 6 characters long!");
    }
    else {
        pass.setCustomValidity("");
    }
}

function checkConfirm() {
    var pass = document.getElementById("password");
    var conf = document.getElementById("confirm");
    if (conf.value != pass.value) {
        conf.setCustomValidity("Password doesn't match");
    }
    else {
        conf.setCustomValidity("");
    }
}

function checkEmail() {
    var email = document.getElementById("email");

    if (email.value.startsWith("@") || email.value.endsWith("@") ||
        email.value.startsWith(".") || email.value.endsWith(".") ||
        email.value.startsWith(" ") || email.value.endsWith(" ") || email.value.includes(" ") ||
        !isNaN(email.value.charAt(0)) ||
        !isNaN(email.value.charAt(email.value.length - 1)) ||
        !isNaN(email.value.charAt(email.value.indexOf("@") + 1))) {
        email.setCustomValidity("Invalid email format.");
    }
    else {
        email.setCustomValidity("");
    }
}

function checkDOB() {
    var dob = document.getElementById("dob");
    var today = new Date();

    if (dob.value > today.toISOString().split("T")[0]) {
        dob.setCustomValidity("Your DOB is not valid");
    }
    else if (today.getFullYear() - dob.value.split("-")[0] < 18) {
        dob.setCustomValidity("You must be at least 18 years old");
    }
    else {
        dob.setCustomValidity("");
    }
}