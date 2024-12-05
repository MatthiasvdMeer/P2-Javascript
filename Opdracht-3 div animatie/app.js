const div = document.querySelector('div');
let position = 0;
let direction = 1;

setInterval(() => {
    position += direction * 10; 
    div.style.left = position + 'px';

    if (position >= window.innerWidth - div.offsetWidth) {
        direction = -1; 
    }

    if (position <= 0) {
        direction = 1; 
    }
}, 100);

function colorchange(){
    div.addEventListener('click', () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        div.style.backgroundColor = randomColor;
    });
}