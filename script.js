const buttonForecast = document.querySelector('.forecast-btn'); //создала переменную для кнопки
const newForecast = document.querySelector('h1');
const percentForecast = document.querySelector('.current-forecast p');
const forecastTemplate = document.querySelector('#forecast-item');
const forecasts = document.querySelector('.forecasts');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
} // создала функцию для генерации случайного числа

buttonForecast.addEventListener('click', function() {

    let predictionNumber = getRandomNumber(1, 6);
    let forecast = "";
    if (predictionNumber == 1) {
        forecast = "Счастье не за горами)";
    } else if (predictionNumber == 2) {
        forecast = "Вы не узнаете, если не попытаитесь.";
    } else if (predictionNumber == 3) {
        forecast = "Год полон приятных сюрпризов";
    } else if (predictionNumber == 4) {
        forecast = "Вам признаются в любви!!";
    } else {
        forecast = "Вы будете блистать ярче звезд";
    }
    newForecast.textContent = forecast;

    const percent = getRandomNumber(0, 100);
    percentForecast.textContent = `${percent}%`;
})

function makeForecastTemplate(title, percent) {
    const myForecast = forecastTemplate.content.cloneNode(true);

    myForecast.querySelector('h3').textContent = newForecast;
    myForecast.querySelector('.forecast-item p').textContent = `${percentForecast}%`;

    return myForecast;
}

const templateResult = makeForecastTemplate(newForecast, percentForecast) // вот тут я что-то запуталась, не понимаю,что писать в скобках, возможно вот так
forecasts.prepend(templateResult);