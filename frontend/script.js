const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

// Handle signup form submission
document.querySelector('.signup form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstName = e.target.querySelector('input[name="firstName"]').value;
    const lastName = e.target.querySelector('input[name="lastName"]').value;
    const email = e.target.querySelector('input[name="email"]').value;
    const password = e.target.querySelector('input[name="password"]').value;

    try {
        const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, email, password })
        });

        const result = await response.json();
        if (response.ok) {
            console.log(result);
            // Redirect to login page
            formPopup.classList.remove("show-signup");
        } else {
            alert('Registration failed: ' + result.error);
            console.error(result.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Handle login form submission
document.querySelector('.login form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = e.target.querySelector('input[name="email"]').value;
    const password = e.target.querySelector('input[name="password"]').value;

    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        if (response.ok) {
            console.log(result);
            // Store the token or handle login logic here
            // Redirect to home page
            window.location.href = 'home.html';  // Update this URL as needed
        } else {
            alert('Login failed: ' + result.error);
            console.error(result.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
