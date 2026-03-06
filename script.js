// ================== CONTROLE DO MENU MOBILE ==============================
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navList');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');

    // Bloquear scroll quando menu aberto
});