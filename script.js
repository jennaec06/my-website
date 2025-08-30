// Display an alert message when the page loads
window.onload = function() {
    alert("Welcome to my website!");
};
// Function to validate form before submission
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Name and email fields cannot be empty!");
        return false; // Prevent form submission
    }

    alert("Form submitted successfully!");
    return true; // Allow form submission
}
function changeText() {
  document.getElementById("text").innerText = "You clicked the button!";
}
// Remove this if it's not needed
console.log("Button clicked!");
const textElement = document.getElementById("text");
textElement.innerText = "Updated!";
