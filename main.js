
const luckyBtn = document.querySelector('.lucky__btn');
let currentLogo = document.querySelector('.logo__img');
const newImgSrc = "img/logo_il-makiage.png";

luckyBtn.addEventListener('click', changeLogo);

function changeLogo(e) {
    e.preventDefault();
    currentLogo.src = newImgSrc;
    currentLogo.classList.add('change__logo')
}

