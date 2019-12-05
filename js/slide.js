///////スライドショー///////

const slideWrapper = document.getElementById("slide_wrap");
const slideItems = document.getElementsByClassName("slide_item");
let activeNum = 0;
const MaxSlideNum = slideItems.length - 1;
const IntervalTime = 7000;
const FadeOutTIme = 900;

slideItems[0].classList.add("active", "zoom");

setInterval(function () {
    const currentNum = activeNum;
    slideItems[activeNum].classList.remove("active", "zoom");
    setTimeout(function () {
        slideItems[currentNum].classList.remove("zoom");
    }, FadeOutTIme);
    activeNum = activeNum === MaxSlideNum ? 0 : activeNum + 1;
    slideItems[activeNum].classList.add("active", "zoom");
}, IntervalTime);
