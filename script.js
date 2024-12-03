'use strict';
const modal = document.querySelector('.modal');
const overplay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');

const btnCloseModal = document.querySelector('.close-modal');

const close = function () {
  modal.classList.add('hidden');
  overplay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overplay.classList.remove('hidden');
  });
}
btnCloseModal.addEventListener('click', close);
overplay.addEventListener('click', close);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    close();
  }
});
// const arr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
