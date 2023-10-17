export default function menuMobileInit() {
    /*definindo variaveis do toggle e da lista do menu*/
    const toggle = document.querySelector('.toggle');
    const menuList = document.querySelector('.js-liste');
    /*essa função ira fazer com que apareça o botao preto menu e ao clicar abrirá o menu*/
    if (toggle && menuList) {
        function toggleMenu() {
            menuList.classList.toggle('active');
            const toggleIcon = toggle.querySelector('span');
            toggleIcon.classList.toggle('active');
            toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
        }

        toggle.addEventListener('click', toggleMenu);
    }
}
