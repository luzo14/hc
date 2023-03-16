const searchHot = document.querySelector(".search_hot");
firstImg = searchHot.querySelectorAll(".search_hot_list")[0];
arrowIcon = document.querySelectorAll(".search_most_content i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 19;

arrowIcon.forEach(icon =>{
    icon.addEventListener("click",()=>{
        searchHot.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) => {
    e.preventDefault();
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = searchHot.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    searchHot.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

searchHot.addEventListener("mousedown", dragStart);
searchHot.addEventListener("mousemove", dragging);
searchHot.addEventListener("mouseup", dragStop);