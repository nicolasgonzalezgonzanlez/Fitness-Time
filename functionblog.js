$(document).ready(function(){
    
$(".liLink").click(function(ev){
    ev.preventDefault();
    var catProduct = $(this).attr('category');
	console.log(catProduct);
    
    $('.nota ').hide();  
    $('.nota[category="'+catProduct+'"] ').show(); 
}) 
$(".liLink[category='all']").click(function(ev){
    ev.preventDefault();
    $('.nota ').show(); 
})    
    
});