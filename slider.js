const cards = document.querySelector('.cards')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

left.addEventListener('click',()=>{
  cards.scrollBy({
    left: -200, // Scroll by the width of one card
    behavior: 'smooth'
  });
})

right.addEventListener('click', ()=>{
  cards.scrollBy({
    left: 200, // Scroll by the width of one card
    behavior: 'smooth'
  });
})
