document.addEventListener("DOMContentLoaded", function () {
    AOS.init({ duration: 1000, once: true });

    // ✅ Update footer year dynamically
    document.getElementById("year").textContent = new Date().getFullYear();

    // ✅ Handle form submission
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                successMessage.style.display = "block";
                form.reset();
            }
        });
    });
});
