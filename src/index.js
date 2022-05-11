import './less/index.less'

// Your code goes here!
//1
const container = document.querySelector('.container');
function escKey(event) {
    if (event.key === 'Escape') {
      container.classList.remove('container'); 
    } else {
        if (event.key === 'Home') {
            container.classList.add('container');
        }
    }
}
document.addEventListener('keydown', escKey)

const heading = document.querySelector('h1');
heading.textContent = 'READY TO GO!!';

//2
document.addEventListener('copy', () => {
    navigator.clipboard.readText().then(text => {
        heading.textContent += text
    });
})

// 3
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror');
})

//4
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ' ';
})

//5
window.addEventListener('keydown', evt => {
    if (evt.key === '6') {
        document.body.outerHTML = 'YOU HAVE ERASED THE EVIDENCE!';
    }
})

//6
document.body.addEventListener('mouseover', evt => {
    const {clientX, clientY} = evt;
    // console.log(`mouse is at ${clientX}, ${clientY}`)
})

// 7 & 8
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    });
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    });
}

//9
const signUps = document.querySelectorAll('.btn')
for (let btn of signUps) {
    btn.addEventListener('click', evt => {
        evt.target.classList.remove('btn')
    });
}

//10
//only works if you hit escape first and then only works on the blog and contact links?? weird huh...
document.querySelector('.nav').addEventListener('click', evt => {
    evt.preventDefault();
    console.log(`the ${evt.target.textContent} links are super broken, so weird!`);
})