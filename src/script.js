const liters = document.querySelector(`#liters`);
const percentage = document.querySelector(`#percentage`);
const smallCups = document.querySelectorAll(`.cup-small`);

const numCups = smallCups.length;

function emptyCups() {
  smallCups.forEach(smallCup => smallCup.classList.remove('full'));
}
function fillCups(idx) {
  Array.from(smallCups)
    .filter((_, i) => i <= idx)
    .forEach(smallCup => smallCup.classList.add('full'));
}

smallCups.forEach((smallCup, idx) => {
  smallCup.addEventListener('click', e => {
    emptyCups();
    fillCups(idx);

    const cupN = idx + 1;
    const percValue = cupN / numCups;
    const percText = percValue * 100 + '%';
    percentage.style.height = percText;
    percentage.innerText = percText;
    if (percValue !== 1) {
      console.log(percValue);
      liters.innerText = `${2 * (1 - percValue)}L`;
      liters.nextElementSibling.innerText = 'Remained';
    } else {
      liters.innerText = '';
      liters.nextElementSibling.innerText = '';
    }
  });
});
