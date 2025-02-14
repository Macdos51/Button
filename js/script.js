let count = 0;
const button = document.getElementById("counter");

button.addEventListener("click", function() {
    count++;
    this.textContent = count;

    // Создаем новый объект Audio при каждом клике
    const clickSound = new Audio("/sound/click.mp3");
    clickSound.play();
});


document.getElementById("counter").addEventListener("click", function() {
    // Получаем размеры окна
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Получаем размеры кнопки
    var buttonWidth = this.offsetWidth;
    var buttonHeight = this.offsetHeight;

    // Генерируем случайные координаты для кнопки с учётом её размеров
    var randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));  // Учитываем ширину кнопки
    var randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));  // Учитываем высоту кнопки

    // Перемещаем кнопку
    this.style.left = randomX + "px";
    this.style.top = randomY + "px";
});

document.getElementById("reloadButton").addEventListener("click", function() {
    location.reload(); // Перезагружает страницу
});


