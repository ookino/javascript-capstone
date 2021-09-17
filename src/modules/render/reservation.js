import API from '../data';

const modal = document.getElementById('reservation-modal');

const displayReservations = (ul, userReservation) => {
  const reservation = document.createElement('li');
  reservation.className = 'reservation';
  const reservationMeta = document.createElement('div');
  reservationMeta.className = 'comment-meta';
  reservation.appendChild(reservationMeta);

  const startdate = document.createElement('p');
  startdate.className = 'reservation-p';
  startdate.innerText = `${userReservation.date_start} to`;
  const enddate = document.createElement('p');
  enddate.className = 'reservation-p';
  enddate.innerText = `${userReservation.date_end} by`;
  reservationMeta.appendChild(startdate);
  reservationMeta.appendChild(enddate);
  const name = document.createElement('p');
  name.innerText = `: ${userReservation.username}`;
  name.style.textTransform = 'Capitalize';
  reservation.appendChild(name);
  ul.appendChild(reservation);
};

const reserveModal = (meal) => {
  const reserveContainer = document.createElement('div');
  reserveContainer.className = 'reserve-container';
  const closeSection = document.createElement('div');
  closeSection.className = 'close-section';
  reserveContainer.appendChild(closeSection);
  const closeButton = document.createElement('button');
  closeButton.className = 'close-btn icn-btn';
  closeButton.innerHTML = '&times;';
  closeSection.appendChild(closeButton);
  const reserveContent = document.createElement('div');
  reserveContent.className = 'reserve-content';
  reserveContainer.appendChild(reserveContent);
  const reserveImg = document.createElement('img');
  reserveImg.className = 'reserve-img';
  reserveImg.src = meal.strMealThumb;
  reserveContent.appendChild(reserveImg);
  const reserveTitle = document.createElement('h2');
  reserveTitle.className = 'reserve-title';
  reserveTitle.innerText = meal.strMeal;
  reserveContent.appendChild(reserveTitle);
  const mealInfo = document.createElement('ul');
  mealInfo.className = 'meal-info';
  reserveContent.appendChild(mealInfo);

  const category = document.createElement('li');
  category.className = 'reserve-details';
  mealInfo.appendChild(category);
  const categorySpan = document.createElement('span');
  categorySpan.className = 'category';
  categorySpan.innerHTML = 'Category: ';
  category.appendChild(categorySpan);
  const categorySpanSpan = document.createElement('span');
  categorySpanSpan.innerText = meal.strCategory;
  category.appendChild(categorySpanSpan);

  const area = document.createElement('li');
  area.className = 'reserve-details';
  mealInfo.appendChild(area);
  const areaSpan = document.createElement('span');
  areaSpan.className = 'area';
  areaSpan.innerHTML = 'Area: ';
  area.appendChild(areaSpan);
  const areaSpanSpan = document.createElement('span');
  areaSpanSpan.innerText = meal.strArea;
  area.appendChild(areaSpanSpan);

  const recipe = document.createElement('li');
  recipe.className = 'reserve-details';
  mealInfo.appendChild(recipe);
  const recipeSpan = document.createElement('span');
  recipeSpan.className = 'recipe';
  recipeSpan.innerHTML = 'Recipe: ';
  recipe.appendChild(recipeSpan);
  const recipeSrc = document.createElement('a');
  recipeSrc.href = 'meal.strSource';
  recipeSrc.innerHTML = 'Recipe Link';
  recipe.appendChild(recipeSrc);

  const videoInstruction = document.createElement('li');
  videoInstruction.className = 'reserve-details';
  mealInfo.appendChild(videoInstruction);
  const videoSpan = document.createElement('span');
  videoSpan.className = 'video-instruction';
  videoSpan.innerHTML = 'Video: ';
  videoInstruction.appendChild(videoSpan);
  const videoSrc = document.createElement('a');
  videoSrc.href = 'meal.strYoutube';
  videoSrc.innerHTML = 'YouTube Link';
  videoInstruction.appendChild(videoSrc);

  const sectionTitle = document.createElement('div');
  reserveContent.appendChild(sectionTitle);
  const sectionTitleHeader = document.createElement('h2');
  sectionTitleHeader.className = 'section-title';
  sectionTitleHeader.innerHTML = 'Reservations(0)';
  sectionTitle.appendChild(sectionTitleHeader);
  const reservationList = document.createElement('li');
  reservationList.className = 'reservation-list';
  API.getReservations(meal.idMeal).then((data) => {
    if (data === 'No reservations available for this meal') {
      reservationList.innerHTML = `<li class='no-comments'>${`${data}. Add a new reservation`}</li>`;
    } else {
      data.forEach((userReservation) => {
        displayReservations(reservationList, userReservation);
      });
    }
  });
  sectionTitle.appendChild(reservationList);

  const reservationForm = document.createElement('div');
  reservationForm.className = 'reservation-form';
  reserveContent.appendChild(reservationForm);
  const reservationFormTitle = document.createElement('h2');
  reservationFormTitle.className = 'reservation-form-title';
  reservationFormTitle.innerHTML = 'Add a reservation';
  reservationForm.appendChild(reservationFormTitle);
  const reserveForm = document.createElement('form');
  reserveForm.className = 'form';
  reservationForm.appendChild(reserveForm);
  const inputReserveName = document.createElement('input');
  inputReserveName.type = 'text';
  inputReserveName.name = 'username';
  inputReserveName.placeholder = 'Your Name';
  inputReserveName.attributes.required = true;
  reserveForm.appendChild(inputReserveName);
  const inputReserveStartDate = document.createElement('input');
  inputReserveStartDate.type = 'text';
  inputReserveStartDate.name = 'start-date';
  inputReserveStartDate.placeholder = 'Start Date (yyyy-mm-dd)';
  inputReserveStartDate.attributes.required = true;
  reserveForm.appendChild(inputReserveStartDate);
  const inputReserveEndDate = document.createElement('input');
  inputReserveEndDate.type = 'text';
  inputReserveEndDate.name = 'end-date';
  inputReserveEndDate.placeholder = 'End Date (yyyy-mm-dd)';
  inputReserveEndDate.attributes.required = true;
  reserveForm.appendChild(inputReserveEndDate);
  const reserveSubmitButton = document.createElement('button');
  reserveSubmitButton.type = 'submit';
  reserveSubmitButton.className = 'reserve-submit-button cursor';
  reserveSubmitButton.innerHTML = 'Reserve';
  reserveForm.appendChild(reserveSubmitButton);

  reserveSubmitButton.onclick = (e) => {
    e.preventDefault();
    API.postReservations(
      meal.idMeal,
      inputReserveName.value,
      inputReserveStartDate.value,
      inputReserveEndDate.value,
    ).then(() => {
      if (reservationList.hasChildNodes()) {
        reservationList.innerHTML = '';
        API.getReservations(meal.idMeal).then((data) => {
          if (data === 'No reservations available for this meal') {
            reservationList.innerHTML = `<li class='no-comments'>${`${data}. Add a new reservation`}</li>`;
          } else {
            data.forEach((userReservation) => {
              displayReservations(reservationList, userReservation);
            });
          }
        });
      }
    });
    inputReserveName.value = '';
    inputReserveStartDate.value = '';
    inputReserveEndDate.value = '';
  };

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modal.appendChild(reserveContainer);
};

export default reserveModal;
