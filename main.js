
const luckyBtn = document.querySelector('.lucky__btn');
luckyBtn.addEventListener('click', changeLogo);

function changeLogo() {
    const currentLogo = document.querySelector('.logo__img');
    console.log(currentLogo.src);
    currentLogo.classList.remove('logo');
    currentLogo.classList.add('change__logo');
    currentLogo.src = 'img/logo_il-makiage.png'
}