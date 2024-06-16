let imgs = document.getElementsByClassName("imgs");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

for (imgs of imgs) {
    imgs.addEventListener("dragstart", (e) => {
        selected = e.target;
    });
}

right.addEventListener("dragover", (e) => {
    e.preventDefault();
})

right.addEventListener("drop", () => {
    if (selected) {
        right.appendChild(selected);
        selected = null;
    }
});

left.addEventListener("dragover", (e) => {
    e.preventDefault();
})

left.addEventListener("drop", () => {
    if (selected) {
        left.appendChild(selected);
        selected = null;
    }
});