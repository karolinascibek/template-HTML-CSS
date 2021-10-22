

class Slider {
    currentScreen = 0;
    screen = null;

    constructor() {
        const slider = this.getScreens();
        this.screen = slider[this.currentScreen];

    }

    // do poprawy
    next(nextScreen, direction = "l") {
        const screens = this.getScreens()

        this.currentScreen = this.lookSizeSlider(nextScreen, screens)
        const leftScreen = this.lookSizeSlider(this.currentScreen - 1, screens)
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


        if (direction === "r") {
            this.addClass(screens[rightScreen], "move-screen-hidden");
            this.removeClass(screens[leftScreen], "move-screen-hidden");
        }
        else {
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
    prev() {

    }
    current() {

    }

    changeBottomNav() {

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


    // method init slider
    slider(objs) {
        const slider = document.querySelector(".slider");

        for (let [i, ob] of objs.entries()) {
            // głowny kontener
            const silderContainer = document.createElement("div");
            silderContainer.classList.add("slider-container");
            silderContainer.classList.add("slider-container-hidden")
            silderContainer.classList.add("slider-container-hidden-right")

            // tło
            const sliderBackground = this.createSliderBackground()
            silderContainer.appendChild(sliderBackground);

            // głowny ekran slidera
            const screen = this.createSliderScreen(i + 1, ob);
            silderContainer.appendChild(screen);

            slider.appendChild(silderContainer);
        }

        // navigacja pionowa
        const btnRight = this.createNextBtn();
        const btnLeft = this.createPrevBtn();
        slider.appendChild(btnLeft)
        slider.appendChild(btnRight)

        //nawigacja pozioma
        const btnsBottom = document.createElement("div");
        btnsBottom.id = "bottom-btns";

        for (let i = 0; i < objs.length; i++) {
            const btn = document.createElement("div")
            btn.id = `btn-bottom-${i}`;
            btnsBottom.append(btn);
        }
        slider.append(btnsBottom);

        //ekrany

    }
    createSliderBackground() {
        const sliderBackground = document.createElement("div");
        sliderBackground.id = "slider-background"

        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        sliderBackground.appendChild(div1);
        sliderBackground.appendChild(div2);
        return sliderBackground
    }
    createSliderScreen(i, obj) {
        const screen = document.createElement("div");
        screen.id = `screen-${i}`;
        screen.classList.add("screen");

        // text container
        const textContainer = this.createScreenTextBox(obj);

        // img container
        const imgContainer = this.createScreenImgBox(obj);

        screen.append(textContainer);
        screen.append(imgContainer);

        return screen
    }
    createScreenImgBox(obj) {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");

        const div = document.createElement("div");
        div.classList.add("img");
        div.style.backgroundImage = `url(${obj.img})`;

        imgContainer.append(div);
        return imgContainer;
    }
    createScreenTextBox(obj) {
        const textContainer = document.createElement("div");
        textContainer.classList.add("text-container");

        const h1 = document.createElement("h1");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");

        h1.innerHTML = obj.h1;
        p1.innerText = obj.p1;
        p2.innerHTML = obj.p2;

        textContainer.append(h1);
        textContainer.append(p1);
        textContainer.append(p2);
        return textContainer;
    }
    createPrevBtn() {
        const prev = document.createElement("button");
        prev.id = "btn-left"
        prev.innerHTML = "<i class='fas fa-chevron-left'></i>"
        return prev
    }
    createNextBtn() {
        const next = document.createElement("button");
        next.id = "btn-right"
        next.innerHTML = "<i class='fas fa-chevron-right'></i>"
        return next

    }
    displayScreens() {

    }
    createBottomBtns() {

    }

}

