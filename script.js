
const humburger = document.querySelector('#humburger');
const menu = document.querySelector('#nav-menu');
const scrollBtn = document.getElementById('scrollTop');
const section1 = document.getElementById('home');

const form = document.querySelector('#contactform');
const fname = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');


const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const messageError = document.querySelector('#messageError');
const success = document.querySelector('#successMessage');


scrollBtn.addEventListener('click', (e) => {
    section1.getBoundingClientRect();
    section1.scrollIntoView({
        behavior: 'smooth',
    });
})

humburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});


// Login FOrm Validation
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    success.textContent = "";

    if (fname.value.trim() === "") {
        nameError.textContent = "Full name is required!";
        isValid = false;
    }
    let emailValidation = /^\S+@\S+\.\S+$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required!";
        isValid = false;
    } else if (emailValidation.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email!";
        isValid = false;
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Message is required !";
        isValid = false;
    }

    if (isValid) {
        success.textContent = "Thank you for contacting us!";
        isValid = false;
    }
})