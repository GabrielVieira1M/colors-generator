const colors = ['red', 'green', 'blue', 'purple', 'darkgreen', 'darkred', 'darkblue',  'lightred', 'lightgreen', 'lightblue']
const btn = document.getElementById('btn')
btn.addEventListener('click', function () {
  let randomNumber =  getRandomNumber()
  let colorsAdd = colors[randomNumber]
  let mainColor = document.getElementById('main-color')
  mainColor.style.backgroundColor = colorsAdd

  let spanColor = document.querySelector('.span-color')
  spanColor.innerHTML = colorsAdd
})
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length) 
}