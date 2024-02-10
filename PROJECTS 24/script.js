var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("option");

var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrow-icon");

selectField.addEventListener("click", function () {
    list.style.display = "block"
    arrowIcon.classList.toggle("rotate");
});

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.style.display = "none"
    }
}