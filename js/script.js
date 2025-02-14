let count = 0;
let timeLeft = 30;
let gameActive = true;

const button = document.getElementById("counter");
const reloadButton = document.getElementById("reloadButton");

// Создаем элемент для вывода результата
const resultText = document.createElement("div");
resultText.style.position = "absolute";
resultText.style.top = "50%";
resultText.style.left = "50%";
resultText.style.transform = "translate(-50%, -50%)";
resultText.style.fontSize = "32px";
resultText.style.fontWeight = "bold";
resultText.style.color = "white";
resultText.style.textAlign = "center";
document.body.appendChild(resultText);

// Функция обработки клика/касания
function handleClick() {
    if (!gameActive) return;

    count++;
    button.textContent = count;

    const clickSound = new Audio("sound/click.mp3");
    clickSound.play();

    // Перемещение кнопки
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;

    var randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
    var randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

// Поддержка кликов и касаний
button.addEventListener("click", handleClick);
button.addEventListener("touchstart", handleClick); // Поддержка для тач-устройств

// Таймер обратного отсчета
const timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        gameActive = false;

        button.style.display = "none";
        resultText.textContent = `⏳ Время вышло! Вы наклацали: ${count} очков! 🎉`;
        reloadButton.style.display = "block";
    }
}, 1000);

// Кнопка перезапуска
reloadButton.addEventListener("click", function () {
    location.reload();
});
reloadButton.addEventListener("touchstart", function () {
    location.reload();
});


