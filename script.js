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
let siteRating = 0;
function star(starNumber) {
    siteRating = starNumber;
    starNumber = starNumber - 1;
    // console.log(starNumber)
    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];
    // console.log(ids[starNumber]);
    let star = document.getElementById(ids[starNumber]);
    // console.log(star);
    if (star.src.includes("images/star_2.png")) {
        for (let i = 0; i <= starNumber; i++) {
            let id = ids[i];
            document.getElementById(id).src = "images/star_1.png";
        }
    }

    else {
        for (let i = 0; i < ids.length; i++) {
            if (i > starNumber) {
                id = ids[i];
                document.getElementById(id).src = "images/star_2.png";
            }
        }
    }

}
function resetRating() {
    //  console.log('Сбросить рейтинг')
    siteRating = 0
    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"];
    for (let i = 0; i < ids.length; i++) {
        let id = ids[i];
        document.getElementById(id).src = "images/star_2.png";
    }
}

const sandRatingBtn = document.getElementById("sendRatingBtn")

sandRatingBtn.addEventListener("click", function () {
    // console.log("Отправить рейтинг")
    let text;
    // if (siteRating == 5); {
    //     text = "Спасибо за высокую оценку"
    // }
    // if (siteRating == 4); {
    //     text = "Спасибо за хороший бал"
    // }
    switch (siteRating) {
        case 1:
        case 2:
        case 3:
            text = "Спасибо за ваш бал!"
            break;
        case 4:
            text = "Спасибо за хороший бал!"
            break;
        case 5:
            text = "Спасибо за выший бал!"
            break;
        default:
            text = "Пожалуйста, поставьте оценку от 1 до 5";
    }
    document.getElementById('ratingText').innerText = text;

});
