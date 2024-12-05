const div = document.querySelector('div');
let position = 0;

setInterval(() => {
    div.style.left = (position++ % window.innerWidth) + 'px';
}, 100);