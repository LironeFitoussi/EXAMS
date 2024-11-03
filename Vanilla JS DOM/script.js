function showAlert() {
    alert("Button clicked!");
}

const button = document.getElementById("trigger-button");
button.addEventListener("click", showAlert);

function updateMessage() {
    const messageBox = document.getElementById("message-box");
    messageBox.textContent = "Hello, welcome to the exam project!";
}

updateMessage();

const userList = ["Alice", "Bob", "Charlie"];

const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
    items[i].textContent = `Item ${i + 1}`;
}

document.getElementById("simple-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const nameInput = document.getElementById("name").value;
    
    if (nameInput === "") {
        alert("Name is required.");
    } else {
        alert(`Hello, ${nameInput}!`);
    }
});

const settings = {
    theme: "dark",
    language: "en"
};
console.log(settings.color);  