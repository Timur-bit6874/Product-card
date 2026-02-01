// Покраска всех карточек

const productCard = document.querySelectorAll('.card-container');
const changeColorCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#28300d';
const blueColor = '#5757da';

changeColorCardButton.addEventListener('click', () => {
  productCard.forEach((card) => card.style.backgroundColor = greenColorHash);
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColor;
})

// Открытие гугл карты

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const isConfirmed = confirm('Вы действительно хотите открыть Google?');

  if (isConfirmed === true) {
    window.open('https://www.google.com');
   } else {
      return;
    }  
}

//Вывод консоль лог

const outConsoleLogButton = document.querySelector('#output-console-log');

//outConsoleLogButton.addEventListener('click', outconsolelog)

outConsoleLogButton.addEventListener('click', outConsoleLog('ДЗ №4'))

function outConsoleLog(message) {
  alert(message);
  console.log(message);
}

// Выводить контент заголовка h1 при наведении

const sectionTitle = document.querySelector('.section-products__title');

sectionTitle.addEventListener('mouseenter', function() {
  console.log(this.textContent);
});

//Добавляем кнопку изменения цвета с одной на другую

const colorSwitchingButton = document.querySelector('#color-switching');

colorSwitchingButton.addEventListener('click', () => {
  colorSwitchingButton.classList.toggle("bg-inactive", !colorSwitchingButton.classList.toggle("bg-active"))
})
  
  
  
 
  