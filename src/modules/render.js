import involvement from './involvement';

const ul = document.getElementById('meal-list');
const commentModal = document.getElementById('modal-comment');
const reserveModal = document.getElementById('reservation-modal');

const renderModal = (meal) => {
  const modalInner = document.createElement('div');
  modalInner.className = 'modal-inner';
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  modalInner.appendChild(modalHeader);
  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-modal icn-btn';
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => {
    commentModal.style.display = 'none';
  });
  modalHeader.appendChild(closeBtn);
  const modalDetails = document.createElement('div');
  modalDetails.className = 'modal-details';
  modalInner.appendChild(modalDetails);
  const modalImg = document.createElement('img');
  modalImg.className = 'modal-img';
  modalImg.src = meal.strMealThumb;
  modalDetails.appendChild(modalImg);
  const modalMeta = document.createElement('div');
  modalMeta.className = 'modal-meta';
  modalDetails.appendChild(modalMeta);
  const modalTitle = document.createElement('h4');
  modalTitle.className = 'modal-title';
  modalTitle.innerText = meal.strMeal;
  modalMeta.appendChild(modalTitle);
  const modalDesc = document.createElement('p');
  modalDesc.className = 'modal-desc';
  modalDesc.innerText = meal.strInstructions;
  modalMeta.appendChild(modalDesc);
  commentModal.appendChild(modalInner);
};

const renderReserveModal = (meal) => {
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
  sectionTitleHeader.innerHTML = 'Reservations';
  sectionTitle.appendChild(sectionTitleHeader);
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
  inputReserveStartDate.type = 'date';
  inputReserveStartDate.name = 'start-date';
  inputReserveStartDate.placeholder = 'Start Date';
  inputReserveName.attributes.required = true;
  reserveForm.appendChild(inputReserveStartDate);
  const inputReserveEndDate = document.createElement('input');
  inputReserveEndDate.type = 'date';
  inputReserveEndDate.name = 'end-date';
  inputReserveEndDate.placeholder = 'End Date';
  inputReserveName.attributes.required = true;
  reserveForm.appendChild(inputReserveEndDate);
  const reserveSubmitButton = document.createElement('button');
  reserveSubmitButton.type = 'submit';
  reserveSubmitButton.className = 'reserve-submit-button';
  reserveSubmitButton.innerHTML = 'Reserve';
  reserveForm.appendChild(reserveSubmitButton);

  closeButton.addEventListener('click', () => {
    reserveModal.style.display = 'none';
  });
  reserveModal.appendChild(reserveContainer);
};

const renderMeals = (mealsData, likesData) => {
  const { meals } = mealsData;

  meals.forEach((mealItem) => {
    const li = document.createElement('li');
    li.className = 'meal-item';

    const img = document.createElement('img');
    img.src = mealItem.strMealThumb;
    img.className = 'meal-image';
    li.appendChild(img);

    const div = document.createElement('div');
    div.className = 'meal-meta';
    li.appendChild(div);

    const p = document.createElement('p');
    p.className = 'meal-title';
    p.innerText = mealItem.strMeal;
    div.appendChild(p);

    const likeSection = document.createElement('div');
    likeSection.className = 'like-section';
    div.appendChild(likeSection);
    const likeBtn = document.createElement('button');
    likeBtn.className = 'icn-btn';
    likeSection.appendChild(likeBtn);
    const likeIcon = document.createElement('i');
    likeIcon.className = 'far fa-heart';
    likeBtn.appendChild(likeIcon);
    const likeCount = document.createElement('p');
    likeCount.className = 'like-count';
    likeCount.innerText = involvement.likes(likesData, mealItem.idMeal);
    likeSection.appendChild(likeCount);

    const commentBtn = document.createElement('button');
    commentBtn.className = 'btn';
    commentBtn.innerText = 'Comment';
    commentBtn.addEventListener('click', () => {
      if (commentModal.hasChildNodes()) {
        commentModal.innerHTML = '';
      } else {
        renderModal(mealItem);
        commentModal.style.display = 'block';
      }
    });
    li.appendChild(commentBtn);

    const reserveBtn = document.createElement('button');
    reserveBtn.className = 'btn btn-alt cursor';
    reserveBtn.innerText = 'Reserve';
    reserveBtn.addEventListener('click', () => {
      if (reserveModal.hasChildNodes()) {
        reserveModal.innerHTML = '';
      } else {
        renderReserveModal(mealItem);
        reserveModal.style.display = 'block';
      }
    });

    li.appendChild(reserveBtn);
    ul.appendChild(li);
  });
};

export default renderMeals;
