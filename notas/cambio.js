var boton = document.getElementById("flow-toggle");
var parrafo = document.getElementById("p-nota");
var parrafo2 = document.getElementById("p-nota2");


boton.addEventListener("click", cambio);


function cambio ()
{
    if(repetidor(numeros, 2)){
            parrafo.className = "flow-text";
            parrafo2.className = "flow-text";
            numeros++;
       }
    else{
         parrafo.className = "2";
         parrafo2.className = "2";
         numeros++;
    }
}
var numeros = 0; 
function repetidor(num, divi) {
    if (num % divi == 0) {
        return true;
    } else {
        return false;
    }
}
//llamar a un html cuando toque algun boton del menu
$(document).ready(function(){
    
$(".liLink").click(function(ev){
    ev.preventDefault();//permite no mostrar en la url "#"
	console.log(catProduct);
    window.location.replace('../page/blog.html')//permite llamar a un html o un enlace 
    var catProduct = $(this).attr('category');
    $('.nota ').hide();  
    $('.nota[category="'+catProduct+'"] ').show();
}) 
$(".liLink[category='all']").click(function(ev){
    ev.preventDefault();
    $('.nota ').show(); 
})    
    
});