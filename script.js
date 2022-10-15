const inputText = document.querySelector('#inputext');
const equal = document.querySelector('#equal');
const btns = Array.from(document.querySelectorAll('.btn'));

// functions
const show = function () {
  console.log(this)
  return inputText.value += this.innerText;
}

const result = () => {
  try {
    return inputText.value = eval(inputText.value);
  }

  catch (err) {
    inputText.value = '';
    alert('Inválido')
  }
}

const clear = () => {
  return inputText.value = '';
}

// events
equal.addEventListener('click', result);
btns.forEach((item) => {
  item.addEventListener('click', show)
})
document.querySelector('#clear').addEventListener('click', clear);
