console.log("1231241241")
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.hireMe'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-hireMe'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});



let resumePopup = document.querySelector('.resume'); // Само окно
let openResumePopupButtons = document.querySelectorAll('.open-resume'); // Кнопки для показа окна
let closeResumeButton = document.querySelector('.close-resume');

openResumePopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        resumePopup.classList.add('active'); // И для самого окна
    })
});

closeResumeButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    resumePopup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        resumePopup.classList.remove('active'); // И с окна
    }
});

let changePopup = document.querySelector('.resCenter'); // Закрытие резюме при переходе к наему
changePopup.addEventListener('click',() => { // Вешаем обработчик на крестик
    resumePopup.classList.remove('active'); // И с окна
});