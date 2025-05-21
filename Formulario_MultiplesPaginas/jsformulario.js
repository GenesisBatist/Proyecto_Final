


const movPag = document.querySelector('.movPag');
const btn_adelante2 = document.querySelector('.sigPag');

const btn_atras1 = document.querySelector('.atras_p1');
const btn_adelante3 = document.querySelector('.adelante_p3');
const btn_atras2 = document.querySelector('.atras_p2');
const btn_adelante4 = document.querySelector('.adelante_p4');
const btn_atras3 = document.querySelector('.atras_p3');
const btn_final = document.querySelector('.fin');

const progressText = document.querySelectorAll(".paso p");
const progressCheck = document.querySelectorAll(".paso .check");
const progressNum = document.querySelectorAll(".paso .num");

let max = 4;
let cont = 1;

btn_adelante2.addEventListener("click", function(e){
    e.preventDefault();

    var nombre = document.getElementById("Nombre").value;
    var cedula = document.getElementById("cedula").value;
   

    if (nombre ==""){
        document.getElementById("nombre-error").innerHTML = "* El nombre no puede estar vacío";
    }else if(cedula ==""){
        document.getElementById("cedula-error").innerHTML = "* El número de cédula no puede estar vacío";
    
    }else{   
    
    document.getElementById("nombre-error").innerHTML = "";
    document.getElementById("cedula-error").innerHTML = "";
    movPag.style.marginLeft = "-25%";
    progressNum[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");    
    cont += 1;
}
});


btn_adelante3.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-50%";
    progressNum[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");    
    cont += 1;
});

btn_adelante4.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-75%";
    progressNum[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");    
    cont += 1;
});

btn_final.addEventListener("click", function(e){
    e.preventDefault();
    alert("Registro Completado");
    progressNum[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");    
    cont += 1;
});

btn_atras1.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "0%";
    progressNum[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");    
    cont -= 1;
});

btn_atras2.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-25%";
    progressNum[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");    
    cont -= 1;
});

btn_atras3.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-50%";
    progressNum[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");    
    cont -= 1;
});