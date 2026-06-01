const { useDeferredValue } = require("react");

function sendCityTemp (city, temp) {
  console.log(`Сейчас в ${city} температура ${temp} градусов по Цельюсию`);
}
sendCityTemp('Москва', 20)



const lightSpeed = 299792458
 if  (lightSpeed > 300000000) {
  console.log('Сверхсветовая скорость')
 } else if (lightSpeed === 299792458) {
  console.log('Скорость света') 
} 
 else {
  console.log('Субсветовая  скорость')
}




let product = "Мышь";
let price = 500;

function buyProduct(budget) {
  if (budget >= price) {
    console.log(`${product} приобретён. Спасибо за покупку!`);
  } else {    let difference = price - budget;
    console.log(`Вам не хватает ${difference}₽, пополните баланс.`);
  }
  
}

buyProduct(300); 


function getUser(status) {
  console.log(`Студент является ${status}`);
}

getUser('отличником');


let userName = "Иван";

let userStatus = "студент";

let userCity = "Москва";