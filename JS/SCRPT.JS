alert(' ¡Bienvenidas  mujeres  emprendedoras!');

if (window.confirm("¿Deseassaberacercadeautonomíaeconómicadelasmujeres?​")) { 
window.open("index.html", "Thanks for Visiting!");
}
var nom;
nom=prompt ("tu nombre es", "NOMBRE");
alert('HOLA'+ ""+ nom + 'te invitamos a ser emprendedora y a desarrollar tu autonomía económica.');

function mueveReloj(){ 
    momentoActual = new Date() 
    hora = momentoActual.getHours() 
    minuto = momentoActual.getMinutes() 
    segundo = momentoActual.getSeconds() 

    horaImprimible = hora + " : " + minuto + " : " + segundo 

    document.form_reloj.reloj.value = horaImprimible 
 setTimeout("mueveReloj()",1000) 
}

//BASE DE DATOS
var productos = ["Antivirus", "Grafica", "Disco duro", "Ordenador", "Bolso portatil", "Portatil", "Memoria RAM", "Router Linux", "Sintonizadora TV"];
var imgGrandes = ["img/co1.jpeg", "img/productos/2.jpg", "img/productos/3.jpg", "img/productos/4.jpg", "img/productos/5.jpg", "img/productos/6.jpg", "img/productos/7.jpg", "img/productos/8.jpg", "img/productos/9.jpg"];
var imgPeque = ["img/productos/1m.jpg", "img/productos/2m.jpg", "img/productos/3m.jpg", "img/productos/4m.jpg", "img/productos/5m.jpg", "img/productos/6m.jpg", "img/productos/7m.jpg", "img/productos/8m.jpg", "img/productos/9m.jpg"];
var precios = [33, 169, 36, 360, 11, 540, 21, 66, 25];
var stock = [5, 2, 8, 3, 10, 4, 3, 1, 2];
var precioTransporte = [6, 12, 20, "gratis"];
var IVA = 0.18;
var uniUser;
