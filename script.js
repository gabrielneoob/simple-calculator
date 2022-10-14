const btnNumbers = document.querySelectorAll('.btn-number');
const display = document.querySelector('.value');
let operator = '';
btnNumbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(number);
    if (display.innerText.length <= 14) {
      display.innerText += number.innerText;
    }
  })
})

document.querySelector('.clear').addEventListener('click', (e) => {
  display.innerText = '';
})