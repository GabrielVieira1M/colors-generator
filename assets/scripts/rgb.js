const btn = document.getElementById('btn')
btn.addEventListener('click', function () {
  let r = getRandomNumber()
  let g = getRandomNumber()
  let b = getRandomNumber()
  let rgb = `rgb(${r}, ${g}, ${b})`

  const mainColor = document.getElementById('main-color')
  mainColor.style.backgroundColor = rgb

  const spanColor = document.querySelector('.span-color')
  spanColor.innerHTML = rgb
})

function getRandomNumber() {
  return Math.floor(Math.random() * 255) 
}
