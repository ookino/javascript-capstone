import './style/style.css';

import API from './modules/data';
import render from './modules/render/meals';

const endpoint = 'https://www.themealdb.com/api/json/v1/1/';
const likesEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/';
const reserveEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/reservations/';
const commentEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/comments/';

const displayMeals = () => {
  Promise.all([
    API.getMeals(`${endpoint}search.php?f=b`),
    API.getLikes(likesEndpoint),
    API.getLikes(reserveEndpoint),
    API.getLikes(commentEndpoint),
  ]).then((data) => {
    render(data[0], data[1]);
  });
};

window.addEventListener('load', displayMeals);
