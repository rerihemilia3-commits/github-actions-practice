const button = document.getElementById("checkButton");
const result = document.getElementById("result");

button.addEventListener("click", function() {
    result.textContent = "Проект успешно проверен!";
    result.style.color = "green";
});

console.log("Веб-проект успешно загружен!");
