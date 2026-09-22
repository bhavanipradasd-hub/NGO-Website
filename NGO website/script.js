// Mobile navigation menu

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Volunteer form

document.getElementById("volunteerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("volName").value;

    alert(
        "Thank you, " + name +
        "! Your volunteer registration has been submitted."
    );

    this.reset();
});


// Contact form

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    this.reset();
});


// Donation

function donate(amount) {

    alert(
        "Thank you for choosing to donate ₹" +
        amount +
        " to Helping Hands NGO."
    );
}


function customDonate() {

    let amount = prompt("Enter donation amount:");

    if (amount !== null && amount !== "") {

        if (!isNaN(amount) && Number(amount) > 0) {

            alert(
                "Thank you for your generous donation of ₹" +
                amount +
                "!"
            );

        } else {

            alert("Please enter a valid amount.");

        }
    }
}