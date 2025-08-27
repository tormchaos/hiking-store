document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  // manipulating the nav bar background
    jQuery(window).scroll(function () {
    let ourHeight = jQuery(this).scrollTop();
    console.log(ourHeight);

    if (ourHeight > 50) {
        jQuery('.nav__background').addClass('scrolled');
    } else {
        jQuery('.nav__background').removeClass('scrolled');
    }
    });

  // manipulating the up button
  jQuery(window).scroll(function(){
    let ourHeight = $(this).scrollTop();
    console.log(ourHeight);
    if (ourHeight > 220) {
        jQuery('.upbtn').show();
    }
    else {
        jQuery('.upbtn').hide();
    };
  });
  jQuery('.upbtn').click(function(){
    console.log('let´s go up');
    jQuery('body, html').animate({scrollTop:0},'fast');
  });

  // burgermenu and sidebar here
  jQuery('.mobile-nav__burgericon').click(function(){ /* button is clicked */
    console.log('button is clicked');
    $('.mobile-nav__sidebar').addClass('mobile-nav__sidebaractive');
    $('body').addClass('sidebarshown');
  });
  jQuery('.mobile-nav__closebtn').click(function(){ /* button is clicked */
    console.log('close-button is clicked');
    $(this).parents('.mobile-nav__sidebar').removeClass('mobile-nav__sidebaractive');
    $('body').removeClass('sidebarshown');
  });

});