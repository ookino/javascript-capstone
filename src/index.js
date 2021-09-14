import './style/style.css';

import API from './modules/data';
import renderMeals from './modules/render';

const endpoint = 'https://www.themealdb.com/api/json/v1/1/';

const displayMeals = () => {
  API.getMeals(`${endpoint}search.php?f=b`).then((mealsData) => {
    renderMeals(mealsData);
  });
};

window.addEventListener('load', displayMeals);
