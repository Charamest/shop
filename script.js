// https://animate.style/
// https://wowjs.uk/
const modal = document.getElementById("myModal")
const openBtn = document.getElementById("myBtn")
const closeBtn = document.getElementById("close")

openBtn.onclick = function () {
    modal.style.display = "block";
}
closeBtn.onclick = function () {
    modal.style.display = "none";

}
modal.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}

// function gift(){
//     const name=prompt("Введите имя")
//     alert("Поздравляем, " + name + "! Вы получили подарок! Скидка 25%!")
//     console.log("Подарок")
// }

const modalhelp = document.getElementById("helperModal")
const helpBtn = document.getElementById("helperBtn")
const closehelpBtn = document.getElementById("closerBtn")

helpBtn.onclick = function () {
    modalhelp.style.display = "block";
}
closehelpBtn.onclick = function () {
    modalhelp.style.display = "none";

}
modalhelp.onclick = function (event) {
    if (event.target == modalhelp) {
        modalhelp.style.display = "none"
    }
}

// function print_contact(){
//     alert(" skype:helper \n tel:79856432545")
// }