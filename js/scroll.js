//Selecciona todos los enlaces con almohadilla
$('a[href*="#"]')
  // Quita los que no enlazan a nada en realidad
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // Enlaces dentro de la página
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Descubre el elemento al que hay que desplazarse
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Hay un objetivo al que desplazarse?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // LLamada de vuelta después de la animación
          // Hay que cambiar el focus
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Comprueba si se hizo focus en el objetivo
            return false;
          } else {
            $target.attr('tabindex','-1'); // Añade tabindex a elementos no "focusables"
            $target.focus(); // Se vuelve a aplicar el focus
          };
        });
      }
    }
  });
