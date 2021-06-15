/*MENU DE NAVEGACION*/
const menu = document.querySelector('.menu');
const linkContainer = document.querySelector('.lista');
const main = document.querySelector('.main');
const pegar = menu.offsetTop;
const btnMenu = document.querySelector('.btnMenu');
let on_off = true;

window.onscroll = () => {

	//MENU PEGADO
	if (window.pageYOffset >= pegar) {
       menu.classList.add('pegar');
       main.style.marginTop = '170px';
    }else{
        menu.classList.remove('pegar');
        main.style.marginTop = '100px'; 
    }

    //HOME
    if (window.pageYOffset >= 500) {
    	document.querySelector('.home').style.right = '20px';
    }else{
    	document.querySelector('.home').style.right = '-100%';
    }

    document.querySelector('.home').addEventListener('click', () => {
    	document.body.scrollTop = '0';
    	document.documentElement.scrollTop = '0';
    });
}


/*Boton Abajo*/
let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 950;
  document.documentElement.scrollTop = 950;
});
