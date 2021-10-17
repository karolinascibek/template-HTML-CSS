// // const screen1 = document.getElementById("screen-1");
// // const scrren2 = document.getElementById("screen-2");

// const btnLeft = document.getElementById("btn-left");
// const btnRight = document.getElementById("btn-right");


// const slider = document.querySelectorAll(".slider-container");
// let currentScreen = 0

// const setVisibleBox = (el, style) => {
//     el.style.display = style
// }

// setVisibleBox(slider[currentScreen], "flex")

// btnLeft.addEventListener("click", function(){
//     setVisibleBox(slider[currentScreen], "none")
//     currentScreen = currentScreen - 1;
//     currentScreen = lookSizeSlider(currentScreen, slider)
//     console.log(currentScreen)
//     setVisibleBox(slider[currentScreen], "flex")
// })

// btnRight.addEventListener("click", function(){
//     setVisibleBox(slider[currentScreen], "none")
//     currentScreen = currentScreen + 1;
//     currentScreen = lookSizeSlider(currentScreen, slider)
//     console.log(currentScreen)
//     setVisibleBox(slider[currentScreen], "flex")
// })
// const lookSizeSlider = (numberScreen, sliders) =>{
//     if(numberScreen < 0){
//         numberScreen = sliders.length -1;
//     }
//     if(numberScreen > sliders.length -1){
//         numberScreen = 0;
//     }
//     return numberScreen;
// }


// console.log(slider)
// setTransformBox(slider, "translateX(0)");
// setTransformBox(scrren2, "translateX(-100%)");


class Slider {
    currentScreen = 0;
    screen = null;

    constructor() {
        const slider = this.getScreens();
        this.screen = slider[this.currentScreen];

    }

    setBottomBtn() {
        const screen = this.getScreens();
        const bottomBtns = document.getElementById("bottom-btns");

    }
    setScreen(nextScreen, direction = "l") {
        const screens = this.getScreens()

        this.currentScreen = this.lookSizeSlider(nextScreen, screens)
        const leftScreen = this.lookSizeSlider(this.currentScreen -1 , screens)
        const rightScreen = this.lookSizeSlider(this.currentScreen + 1, screens)


        // prev 
        this.addClass(screens[leftScreen], "slider-container-hidden");
        this.removeClass(screens[leftScreen], "slider-container-hidden-right");
        this.addClass(screens[leftScreen], "slider-container-hidden-left");
        this.removeClass(screens[leftScreen], "slider-container-visible");
        this.addClass(screens[leftScreen], "move-screen-hidden");

        // next
        this.addClass(screens[rightScreen], "slider-container-hidden");
        this.removeClass(screens[rightScreen], "slider-container-hidden-left");
        this.addClass(screens[rightScreen], "slider-container-hidden-right");
        this.removeClass(screens[rightScreen], "slider-container-visible");
        this.addClass(screens[rightScreen], "move-screen-hidden");


        if(direction === "r"){
            this.addClass(screens[rightScreen], "move-screen-hidden");
            this.removeClass(screens[leftScreen], "move-screen-hidden");
        }
        else{
            this.addClass(screens[leftScreen], "move-screen-hidden");
            this.removeClass(screens[rightScreen], "move-screen-hidden");
        }

        // current 
        this.removeClass(screens[this.currentScreen], "slider-container-hidden-left");
        this.removeClass(screens[this.currentScreen], "slider-container-hidden-right");
        this.removeClass(screens[this.currentScreen], "slider-container-hidden");
        this.removeClass(screens[this.currentScreen], "move-screen-hidden");
        this.addClass(screens[this.currentScreen], "slider-container-visible");

    }

    //get and set metod

    getScreens() {
        return document.querySelectorAll(".slider-container");
    }
    getBtnLeft() {
        return document.getElementById("btn-left");
    }
    getBtnRight() {
        return document.getElementById("btn-right");
    }
    getCurrentScreen() {
        return this.currentScreen;
    }
    setCurrentScreen(index) {
        this.currentScreen = index;
    }
    getActualScreen() {
        return this.screen;
    }
    setActualScreen(screen) {
        this.screen = screen;
    }

    //add metod
    lookSizeSlider(numberScreen) {
        const sliders = this.getScreens();
        if (numberScreen < 0) {
            numberScreen = sliders.length - 1;
        }
        if (numberScreen > sliders.length - 1) {
            numberScreen = 0;
        }
        return numberScreen;
    }

    setVisibleBox(el, style) {
        el.style.display = style
    }
    setTransformBox(el, style) {
        el.style.transform = style
    }
    setOpacityBox(el, style) {
        console.log("opacity: " + style)
        el.style.opacity = style
    }
    addClass(el, className) {
        el.classList.add(className)
    }
    removeClass(el, className) {
        el.classList.remove(className)
    }
    toggleClass(el, className) {
        el.classList.toggle(className)
    }

}

const slider = new Slider();
const screens = slider.getScreens();
const btnLeft = slider.getBtnLeft();
const btnRight = slider.getBtnRight();

let indexScreen = 0

// slider.setVisibleBox(screens[indexScreen], "flex")
// slider.setOpacityBox(screens[indexScreen], "1")
slider.removeClass(screens[indexScreen], "slider-container-hidden")
slider.addClass(screens[indexScreen], "slider-container-visible")

slider.setScreen(indexScreen)


function nextScreen() {
    const currentScreen = slider.getActualScreen();


    slider.setScreen(indexScreen + 1, "r")
    indexScreen = slider.getCurrentScreen()
}

function prevScreen() {
    slider.setScreen(indexScreen - 1, "l")
    indexScreen = slider.getCurrentScreen()
}


btnRight.addEventListener("click", nextScreen);
btnLeft.addEventListener("click", prevScreen);