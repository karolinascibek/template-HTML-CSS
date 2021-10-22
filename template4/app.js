//test
const objs = [
    {
        h1: "Forecast for <strong>the future</strong> of conferences",
        p1: `Duis aute irure dolor in reprehenderit in voluptate velitesse 
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`,
        p2: "Image from <strong>Freepik</strong>",
        img: "https://images03.nicepage.com/c461c07a441a5d220e8feb1a/4fc1a9f340295789806c805b/734vv-min.jpg"
    },
    {
        h1: "<strong>Marketing </strong> Trends & Strategies",
        p1: `Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident`,
        p2: "Image from <strong>Freepik</strong>",
        img: "https://images03.nicepage.com/c461c07a441a5d220e8feb1a/580cb3b9e2b65fbf82c5eddd/bm.jpg?version="
    },
    {
        h1: "<strong>Marketing </strong> Trends & Strategies",
        p1: `Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident`,
        p2: "Image from <strong>Freepik</strong>",
        img: "./img/screen-3.jpg"
    },

    {
        h1: "<strong>Marketing </strong> Trends & Strategies",
        p1: `Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident`,
        p2: "Image from <strong>Freepik</strong>",
        img: "./img/screen-4.jpg"
    },
    {
        h1: "<strong>Marketing </strong> Trends & Strategies",
        p1: `Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident`,
        p2: "Image from <strong>Freepik</strong>",
        img: "./img/screen-4.jpg"
    },
    {
        h1: "<strong>Marketing </strong> Trends & Strategies",
        p1: `Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident`,
        p2: "Image from <strong>Freepik</strong>",
        img: "./img/screen-4.jpg"
    },
    {
        h1: "<strong>Marketing </strong> Trends & Strategies",
        p1: `Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident`,
        p2: "Image from <strong>Freepik</strong>",
        img: "./img/screen-4.jpg"
    },
    {
        h1: "<strong>Marketing </strong> Trends & Strategies",
        p1: `Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident`,
        p2: "Image from <strong>Freepik</strong>",
        img: "./img/screen-4.jpg"
    },
]



const slider = new Slider();
slider.slider(objs)

const screens = slider.getScreens();
const btnLeft = slider.getBtnLeft();
const btnRight = slider.getBtnRight();

let indexScreen = 0


slider.removeClass(screens[indexScreen], "slider-container-hidden")
slider.addClass(screens[indexScreen], "slider-container-visible")

slider.next(indexScreen)


function nextScreen() {
    slider.next(indexScreen + 1, "r")
    indexScreen = slider.getCurrentScreen()
}

function prevScreen() {
    slider.next(indexScreen - 1, "l")
    indexScreen = slider.getCurrentScreen()
}


btnRight.addEventListener("click", nextScreen);
btnLeft.addEventListener("click", prevScreen);


const btnBottoms = document.getElementById("bottom-btns")
btnBottoms.addEventListener('click', function (e) {
    const btn = e.target
    const btnId = btn.id.split("-");
    const id = btnId[btnId.length - 1];

    if (!isNaN(id)) {
        console.log(id)
        // slider.next(id, "l")
        // indexScreen = slider.getCurrentScreen()
    }else{
        console.log("nie: ",id)
    }
})
