const hamburger= document.querySelector('.hamburger_nav');
const menu = document.querySelector('.menu_navegacion');
const x_menu= document.querySelector('.close_menu')
const mainly_content = document.querySelector('.mainly_contenedor');
const content_section = document.querySelectorAll('.content_section');


(function(){
   const sliders = [...document.querySelectorAll('.slider_body')];  //Asi combertimos una lista de nodos a Array agregandole los ...
   const arrowAfter = document.getElementById('after');
   const arrowBefore = document.getElementById('before');
   let value;


   arrowAfter.addEventListener('click', ()=>changePosition(1));
   arrowBefore.addEventListener('click', ()=>changePosition(-1));


   function changePosition(change){
      const currentElement = Number(document.querySelector('.slider_body--show').dataset.id);
      console.log(currentElement)


      value = currentElement;
      value += change;
     

      if(value === 0 || value === sliders.length + 1){
          value = value === 0? sliders.length : 1;

      }

      sliders[currentElement-1].classList.toggle('slider_body--show')
      sliders[value-1].classList.toggle('slider_body--show')
   }

})();


    hamburger.addEventListener('click',()=>{
    menu.classList.add('menu_show');
    menu.classList.remove('menu_close');
});

x_menu.addEventListener('click',()=>{
    menu.classList.add('menu_close');  
});


//let mql = window.matchMedia('(max-width: 768px)');



