var list = document.getElementById("list");

let position = (window.innerHeight - list.offsetHeight) / 2
if (position < 0) {
    position = 0
}
list.style.marginTop = position + "px"

window.addEventListener("resize", () => {
    let position = (window.innerHeight - list.offsetHeight) / 2
    if (position < 0) {
        position = 0
    }
    list.style.marginTop = position + "px"
})