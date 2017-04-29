// add 'scrolled' class to navigation
$(window).scroll(function() {
    if ($(document).scrollTop() > 1) {
        $('header').addClass('is-scrolled');
    } else {
        $('header').removeClass('is-scrolled');
    }
});


