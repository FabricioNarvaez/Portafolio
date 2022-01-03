var abrir = "";
var menu = "";
var cerrado = true;

function initVar(){
    abrir = document.getElementById("open");
    menu = document.getElementById("menu");

    abrir.addEventListener('click', ()=>{
        //console.log(abrir);
        if(cerrado){
            menu.style.width = '100%';
            cerrado = false;
            abrir.innerHTML = "&#10005";
        }else{
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            abrir.innerHTML = "&#9776";
            cerrado = true;
        }
    });

    window.addEventListener('resize', ()=>{
        if(document.body.clientWidth > 451){
            menu.style.removeProperty('overflow');
            menu.style.removeProperty('width');
            abrir.innerHTML = "&#9776";
            cerrado = true;
        }
    })
}

