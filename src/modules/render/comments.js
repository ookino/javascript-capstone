const modal = document.getElementById('modal-comment');
const commentModal = (meal) => {
  const modalInner = document.createElement('div');
  modalInner.className = 'modal-inner';
  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  modalInner.appendChild(modalHeader);
  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-modal icn-btn';
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
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
  modal.appendChild(modalInner);
};

export default commentModal;
