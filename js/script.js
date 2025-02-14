html {
    background-image: url("../img/background.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    overflow: hidden;
    cursor: url("../img/cur.png") 16 16, auto;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    cursor: url("../img/cur.png") 16 16, auto;
}

button {
    position: absolute;
    width: 100px;
    height: 100px;
    font-size: 64px;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 10px;
    background-color: lightgray;
    transition: transform 0.2s ease-in-out;
    cursor: url("../img/cur.png") 16 16, auto;
    background: radial-gradient(circle, white 10%, #cd01cd 100%);
}

button:hover {
    transform: scale(1.1);
}

#reloadButton {
    position: fixed;
    top: 10px;
    right: 20px;
    padding: 10px 20px;
    background-color: lightgray;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    z-index: 1000;
    display: none;
    font-size: 16px;
    font-weight: bold;
}

/* 📱 Адаптация для мобильных устройств */
@media (max-width: 768px) {
    button {
        width: 80px; /* Уменьшаем размер кнопки */
        height: 80px;
        font-size: 48px;
    }

    #reloadButton {
        top: 5px;
        right: 10px;
        font-size: 14px;
        padding: 8px 16px;
    }

    html {
        background-size: contain; /* Фон лучше адаптируется к экрану */
    }
}

@media (max-width: 480px) {
    button {
        width: 60px; /* Еще меньше на маленьких экранах */
        height: 60px;
        font-size: 36px;
    }

    #reloadButton {
        font-size: 12px;
        padding: 6px 12px;
    }

    html {
        background-size: cover;
    }
}

