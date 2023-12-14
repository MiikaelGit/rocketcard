const colors = ['blue', 'red', 'green', 'yellow', 'white', 'black', 'grey', 'pink', 'purple', 'orange'];
const bgCard = document.querySelector('.card');

console.log(bgCard)

export function changeColor() {
    const number = Math.floor(Math.random() * 10 + 1)
    bgCard.style.backgroundColor = colors[number]
}


