$(document).ready(function () 
    {
    // modal se guarda la informacion en localstorage para que no vuelva a aparecer
  
    
     const noMostrarModal = JSON.parse(localStorage.noMostrarModal)
if(noMostrarModal= undefined)
        {  
          $('#modal7').modal('open');
        }
  $("#noAcepto").click(function escuchar (ev)
                     {
                        localStorage.noMostrarModal =true
                        console.log(noMostrarModal)
                   })
                $("#acepto").click(function escucharDos (ev)
                     {
                       localStorage.noMostrarModal =true  
                        console.log(noMostrarModal)
                })
});