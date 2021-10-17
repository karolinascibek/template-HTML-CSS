const btnOpenMenu = document.getElementById("btn-open-menu");
const btnCloseMenu = document.querySelector("#btn-close-menu > button");
const hiddenBox = document.getElementById("hidden-box");


const setTransformBox = (el, style) => {
    el.style.transform = style
}
const setVisibleBox = (el, style) => {
    el.style.display = style
}

setTransformBox(hiddenBox, "translateX(-100%)")

btnOpenMenu.addEventListener("click", function () {
    setTransformBox(hiddenBox, "translateX(0)");
})

btnCloseMenu.addEventListener("click", function () {
    setTransformBox(hiddenBox, "translateX(-100%)");
})


// slider
