$(document).ready(function() {

  $(window).scroll(function () {
  	var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });


  // voice code

  if(responsiveVoice.voiceSupport()) {
    // example
    // responsiveVoice.speak($('#menu_burger').text());
    // menu click function
    $('#menu_burger').on('click', function() {
      responsiveVoice.speak($(this).text(), "US English Male");
      if($('#main_menu').hasClass('opened')) {
        $(this).removeClass('active');
        $('#main_menu').removeClass('opened');
      } else {
        $(this).addClass('active');
        $('#main_menu').addClass('opened');
      }
    });
    $('#main_menu a').on('click', function() {
      $('#menu_burger').removeClass('active');
      $('#main_menu').removeClass('opened');
      if ($(this).attr('href') == '#about') {
        responsiveVoice.speak($('#about').text(), "US English Male");
      }
      else {
        responsiveVoice.speak($(this).text(), "US English Male");
      }
    });

    //
    // $('#main_menu a').on('mouseenter', function() {
    //   responsiveVoice.speak($(this).text());
    // });
  }

  setTimeout(function () {
    if(responsiveVoice.voiceSupport()) {
      // responsiveVoice.speak($('#home').text(), "US English Male");
    }
  }, 1500);


  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function removeSiteLoader() {
	$('#loader-wrapper').animate({opacity: 0 }, 2000 );
	$('#home').animate({opacity: 1 }, 2000 );
	$('#loader-wrapper').animate({'z-index': 0 }, 0);
  $('#loader-wrapper').remove();
}
