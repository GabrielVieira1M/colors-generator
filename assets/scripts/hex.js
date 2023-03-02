const colorsHex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const btn = document.getElementById('btn')
btn.addEventListener('click', function () {
  let hex = '#'
  for(let i = 0; i < 6; i++) {
    hex += colorsHex[getRandomNumber()]
  }
  const mainColor = document.getElementById('main-color')
  mainColor.style.backgroundColor = hex

  const spanColor = document.querySelector('.span-color')
  spanColor.innerHTML = hex 
})

function getRandomNumber() {
  return Math.floor(Math.random() * colorsHex.length) 
}
