const liters = document.querySelector(`#liters`);
const percentage = document.querySelector(`#percentage`);
const smallCups = document.querySelectorAll(`.cup-small`);
const numCups = smallCups.length;

function updateBigCup() {
  const fullCupsNum = document.querySelectorAll(`.cup-small.full`).length;
  const _percValue = fullCupsNum / numCups;
  const percText = _percValue * 100 + '%';
  const literRemain = 2 * (1 - _percValue);

  percentage.style.height = percText;
  percentage.innerText = _percValue === 0 ? '' : percText;
  liters.innerText = literRemain === 0 ? '' : literRemain + 'L';
  liters.nextElementSibling.innerText = literRemain === 0 ? '' : 'Remained';
}

function fillCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling?.classList.contains('full')
  )
    idx--;
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else cup.classList.remove('full');
  });

  updateBigCup();
}

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', e => {
    fillCups(idx);
  });
});
