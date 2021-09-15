const ul = document.getElementById('meal-list');
const commentModal = document.getElementById('modal-comment');

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
    reserveBtn.className = 'btn btn-alt';
    reserveBtn.innerText = 'Reserve';
    li.appendChild(reserveBtn);
    ul.appendChild(li);
  });
};

export default renderMeals;