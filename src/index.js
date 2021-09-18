import './style/style.css';

import API from './modules/data';
import counter from './modules/counter';
import render from './modules/render/meals';

const mealCounter = document.getElementById('meal-counter');

const endpoint = 'https://www.themealdb.com/api/json/v1/1/';
const likesEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/';

const displayMeals = () => {
  Promise.all([
    API.getMeals(`${endpoint}search.php?f=b`),
    API.getLikes(likesEndpoint),
  ]).then((data) => {
    render(data[0], data[1]);
    const length = counter.meals(data[0].meals);
    mealCounter.innerText = length;
  });
};

window.addEventListener('load', displayMeals);
