console.log("1231241241")
// --НАЕМ--
let popupBg = document.querySelector('.popup__bg'); // Фон попап наема
let popup = document.querySelector('.hireMe'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-hireMe'); // Кнопки для показа наема
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия наема
// --РЕЗЮМЕ--
let resumePopup = document.querySelector('.resume'); // Само  резюме
let openResumePopupButtons = document.querySelectorAll('.open-resume'); // Кнопки для показа резюме
let closeResumeButton = document.querySelector('.close-resume'); // кнопки закрытия резюме
let changePopup = document.querySelector('.resCenter'); // Закрытие резюме при переходе к наему

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

changePopup.addEventListener('click',() => { // Вешаем обработчик на крестик
    resumePopup.classList.remove('active'); // И с окна
});

// ----CATEGORY FILTER----

let openAllProjects = document.querySelector('.open__all__projects'); //Кнопка для показа всех проектов
let openAll = document.querySelector('.project__item'); // Сам проект 

let openWebProjects = document.querySelector('.open__web'); //Кнопка для показа web проектов
let openWeb = document.querySelector('.web'); // Сам web проект 

let openAppProjects = document.querySelector('.open__app'); //Кнопка для показа app проектов
let openApp = document.querySelector('.app'); // Сам app проект

let openInteractionProjects = document.querySelector('.open__interaction'); //Кнопка для показа interaction проектов
let openInteraction = document.querySelector('.interaction'); // Сам interaction проект 
let j = 9

    openAllProjects.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        openAll.classList.remove('disactive'); // Вешаем класс для окна
    });

    openWebProjects.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        openWeb.classList.remove('disactive'); // Вешаем класс для окна
        openApp. classList.add('disactive')
        openInteraction.classList.add('disactive')
    });
  

    openAppProjects.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        openWeb.classList.add('disactive'); // Вешаем класс для окна
        openApp. classList.remove('disactive')
        openInteraction.classList.add('disactive')
    });


    openInteractionProjects.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        for(let i =0; i<j; i++){
            openWeb.classList.add('disactive'); // Вешаем класс для окна
            openApp. classList.add('disactive')
            openInteraction.classList.remove('disactive')
        }
    })