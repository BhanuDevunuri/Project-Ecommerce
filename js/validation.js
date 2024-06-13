// validation.js
function validateForm() {
    var email = document.forms["SignUPForm"]["email"].value;
    var password = document.forms["SignUpForm"]["password"].value;
    var confirmPassword = document.forms["SignUpForm"]["confirmPassword"].value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and include a number, a lowercase and an uppercase letter.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}
