function showSignupMessage() {
    const message = document.getElementById("signup-message");

    message.classList.add("show");

    setTimeout(() => {
        message.classList.remove("show");
    }, 5000);
}