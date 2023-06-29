const menulista = document.querySelector('.menu-lista');
const menuicon = document.querySelector('.menuburguer');

menuicon.addEventListener('click', () =>{
    menulista.classList.toggle('ativo')
    menuicon.classList.toggle('ativo')
})
