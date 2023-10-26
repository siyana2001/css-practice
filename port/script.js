document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
    const contactInput = document.getElementById("contact-input");

    const nameOutput = document.getElementById("name");
    const emailOutput = document.getElementById("email");
    const contactOutput = document.getElementById("contact");

    const form = document.getElementById("update-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        nameOutput.textContent = nameInput.value;
        emailOutput.textContent = emailInput.value;
        contactOutput.textContent = contactInput.value;

    });
});
