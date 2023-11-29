window.addEventListener("scroll",function(){
    var header = document.querySelector("nav");
    header.classList.toggle("background", window.scrollY > 0);
}
)

const carousel = document.querySelector(".carousel");

let isDragging = false,startX, startScrollLeft;


const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft + (startX - e.pageX);
}

const dragEnd = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragEnd);
carousel.addEventListener("mouseleave", dragEnd);


