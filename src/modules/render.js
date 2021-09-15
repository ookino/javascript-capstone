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
  reserveModal.innerHTML = `
  <div class="reserve-container">
    <div class="close-section">
      <button class="close-btn icn-btn">&times;</button>
    </div>
    <div class="reserve-content">
      <img src="${meal.strMealThumb}" alt="" class="reserve-img">
      <h2 class="reserve-title">${meal.strMeal}</h2>
      <ul class="meal-info">
        <li class="reserve-details"><span class="category">Category:</span> ${meal.strCategory}</li>
        <li class="reserve-details"><span class="area">Area:</span> ${meal.strArea}</li>
        <li class="reserve-details"><span class="recipe">Recipe:</span> <a href='${meal.strSource}' target="blank">Recipe Link</a></li>
        <li class="reserve-details"><span class="video-instruction">Video Instruction:</span> <a href='${meal.strYoutube}' target="blank">YouTube Link</a></li>
      </ul>
      <div>
        <h2 class="section-title">Reservations</h2>
      </div>
      <div class="reservation-form">
        <h2 class="reservation-form-title">Add a reservation</h2>
        <form class="form">
          <input type="text" name="username" placeholder='Your name' required />
          <input type="date" name="start-date" placeholder='Start Date' required />
          <input type="date" name="end-date" placeholder='End Date' required />
          <button type="submit" class="reserve-submit-button">Reserve</button>
        </form>
      </div>
    </div>
  </div>`;
  const closeButton = document.querySelector('.close-btn');
  const reserveContainer = document.querySelector('.reserve-container');
  closeButton.addEventListener('click', () => {
    reserveModal.style.display = 'none';
  });
  reserveModal.appendChild(reserveContainer);
};

const renderMeals = (mealsData) => {
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
    const likeBtn = document.createElement('button');
    likeBtn.className = 'icn-btn';
    div.appendChild(likeBtn);
    const likeIcon = document.createElement('i');
    likeIcon.className = 'far fa-heart';
    likeBtn.appendChild(likeIcon);
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