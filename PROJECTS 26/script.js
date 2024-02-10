let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        productImg.src = `images/image${i + 1}.png`;
        removeActiveClass();
        this.classList.add("active");
    });
}

function removeActiveClass() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("active");
    }
}