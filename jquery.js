(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $(".dropdown-button").dropdown();
         $('select').material_select();
         $('.modal').modal();
         $('.slider').slider();
         $('.button-collapse').sideNav({
             menuWidth: 300, // Default is 300
             edge: 'left', // Choose the horizontal origin
             closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
             draggable: true, // Choose whether you can drag to open on touch screens,
            
    }
  );
   var toastElement = document.querySelector('.toast');
  var toastInstance = M.Toast.getInstance(toastElement);
  toastInstance.dismiss();
    }); // end of document ready
})(jQuery);
