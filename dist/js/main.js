// get form, and all the inputs
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let submit = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
    // console.log(submit);
    // if (submit) {
    //     submitForm();
    // }
});

function checkInputs() {
    //check username
    //if empty: display error message and add error class
    submit = true;

    if (username.value.trim() === "") {
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
    }

    //check email
    //check if blank
    //check if valid
    let emailValue = email.value.trim();
    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank")
    } else {
        if (!validateEmail(emailValue)) {
            setErrorFor(email, "Email is not valid")
        } else {
            setSuccessFor(email);
        }
    }
    
    //check password
    let passwordValue = password.value.trim();
    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
    } else if (passwordValue.length < 6) {
        setErrorFor(password, "Password must be at least 6 characters");
    } else{
        setSuccessFor(password);
    }

    //check password2
    let password2Value = password2.value.trim();
    if (password2Value === "") {
        setErrorFor(password2, "Password check cannot be blank");
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, "Passwords don't match");
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    submit = false;
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
    let parent = input.parentElement;
    parent.className = "form-control success";
    submit = (submit && true);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const url = 'https://script.google.com/macros/s/AKfycbz7koBpYD9rBwYcyjL9CeXoDhkhNBmaEdHnxMvmnw/exec';

// function submitForm() {
//     var $formP = $('#form');
//   var jqxhr = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     data: $formP.serializeObject()
//   });
// }