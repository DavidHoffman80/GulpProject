$(document).ready(function(){
  // Hamburger function
  $('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('active');
    $('.drop-down').toggleClass('active');
  });

  // Nav link click function
  $('.nav-link').on('click', function(){
    let navHeight = $('.navbar').outerHeight();
    $('.hamburger').toggleClass('active');
    $('.drop-down').toggleClass('active');
    let linkHref = $(this).attr('href');
    $('html, body').delay(500).animate({
      scrollTop: $(linkHref).offset().top - navHeight
    }, 1000);
    return false;
  });

  $('.drop-down, .drop-down-menu, .menu-items').on('click', function(){
    $('.hamburger').toggleClass('active');
    $('.drop-down').toggleClass('active');
  });

  // Nav fade in and out
  $('.navbar').hide();

  let topOfAboutDiv = $('.about').offset().top;
  
  $(window).resize(function(){
    topOfAboutDiv = $('.about').offset().top;
  });
  
  $(window).scroll(function(){
    if($(this).scrollTop() >= (topOfAboutDiv - 50)){
      $('.navbar').fadeIn('slow');
    } else {
      $('.navbar').fadeOut('slow');
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgLy8gSGFtYnVyZ2VyIGZ1bmN0aW9uXHJcbiAgJCgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcuaGFtYnVyZ2VyJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLmRyb3AtZG93bicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuXHJcbiAgLy8gTmF2IGxpbmsgY2xpY2sgZnVuY3Rpb25cclxuICAkKCcubmF2LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgbGV0IG5hdkhlaWdodCA9ICQoJy5uYXZiYXInKS5vdXRlckhlaWdodCgpO1xyXG4gICAgJCgnLmhhbWJ1cmdlcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5kcm9wLWRvd24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICBsZXQgbGlua0hyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuICAgICQoJ2h0bWwsIGJvZHknKS5kZWxheSg1MDApLmFuaW1hdGUoe1xyXG4gICAgICBzY3JvbGxUb3A6ICQobGlua0hyZWYpLm9mZnNldCgpLnRvcCAtIG5hdkhlaWdodFxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5kcm9wLWRvd24sIC5kcm9wLWRvd24tbWVudSwgLm1lbnUtaXRlbXMnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLmhhbWJ1cmdlcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5kcm9wLWRvd24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIE5hdiBmYWRlIGluIGFuZCBvdXRcclxuICAkKCcubmF2YmFyJykuaGlkZSgpO1xyXG5cclxuICBsZXQgdG9wT2ZBYm91dERpdiA9ICQoJy5hYm91dCcpLm9mZnNldCgpLnRvcDtcclxuICBcclxuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICB0b3BPZkFib3V0RGl2ID0gJCgnLmFib3V0Jykub2Zmc2V0KCkudG9wO1xyXG4gIH0pO1xyXG4gIFxyXG4gICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgIGlmKCQodGhpcykuc2Nyb2xsVG9wKCkgPj0gKHRvcE9mQWJvdXREaXYgLSA1MCkpe1xyXG4gICAgICAkKCcubmF2YmFyJykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcubmF2YmFyJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTsiXX0=
