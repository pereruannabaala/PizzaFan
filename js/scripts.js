const toggle_btn = document.querySelector(".toggle-btn");
const big_wrapper = document.querySelector(".big-wrapper");
const main = document.querySelector("main");

let dark = false;

function toggleAnimation() {
    // clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if (dark) {
        clone.classList.remove("Light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("Light");
    }
    clone.classList.add("copy")
    main.appendChild(clone)
}

toggle_btn.addEventListener("click", toggleAnimation);