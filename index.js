const slides = document.getElementsByClassName("carousel-item")
const totalSlides = slides.length
let slidePosition = 0;

//console.log(slides)

const btnNext = document.getElementById("carousel-button-next")
const btnPrevious = document.getElementById("carousel-button-prev")

function hideAllSlides(){
    for(slide of slides)
    {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")

    }
}
/*function moveToNextSlide1(){
    hideAllSlides()
    
    if (slidePosition === totalSlides -1){
        slidePosition = 0;
    }
    else
    {
        slidePosition += 1;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
   
}*/
function moveToNextSlide(){
    clearInterval();

    hideAllSlides()
    
    if (slidePosition === totalSlides -1){
        slidePosition = 0;
    }
    else
    {
        slidePosition += 1;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
   
}

function moveToPrevSlide(){
    hideAllSlides()
    if (slidePosition === 0){
        slidePosition = totalSlides -1;
    }
    else
    {
        slidePosition -= 1;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

btnNext.addEventListener("click",moveToNextSlide)

btnPrevious.addEventListener("click",moveToPrevSlide)


/*window.onload = (event) => {

    setTimeout(function() {
       const setIn =  setInterval(function() {
            moveToNextSlide1()
        }, 2000);
    }, 2000);
      };*/