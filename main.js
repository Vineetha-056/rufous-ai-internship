const form = document.getElementById("user-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    console.log("Name:", name);
    console.log("Email:", email);
});