const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.wrapper i');
const firstCardWidth =  carousel.querySelector('.card').offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft;

// get number of cards xthat can fit in carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

arrowBtns.forEach(btn => {
    btn.addEventListener('click', () =>{
        carousel.scrollLeft += btn.id === 'left' ? -firstCardWidth : firstCardWidth;
    });
});



const dragStart = (e) =>{
    isDragging = true;
    carousel.classList.add('dragging');
    // records the initial cursor and scroll position of carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
    if(!isDragging)return; // if isDragging is false return from here
    // updates scroll position of carousel based on cursor movement
    carousel.scrollLeft = startScrollLeft -  (e.pageX - startX);
}

const dragStop = () =>{
    isDragging = false;
    carousel.classList.remove('dragging');

}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);