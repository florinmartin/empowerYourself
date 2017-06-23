// add 'scrolled' class to navigation
$(window).scroll(function() {

    if ($(document).scrollTop() > 1) {
        $('header').addClass('is-scrolled');
    } else {
        $('header').removeClass('is-scrolled');
    }

});
$(window).resize(function() {


});

//$(document).foundation();

//function scrollToItem(item) {
//    var diff=(item.offsetTop-window.scrollY)/8;
//    if (Math.abs(diff)>1) {
//        window.scrollTo(0, (window.scrollY+diff+26));
//        clearTimeout(window._TO);
//        window._TO=setTimeout(scrollToItem, 30, item)
//    } else {
//        window.scrollTo(0, item.offsetTop + 26)
//    }
//}
function scrollToItem(item, offpos, event) {
	 if(event.which === 13) {
	    $('html, body').animate({
	        scrollTop: $("#" + item + "").offset().top - offpos
	    }, 800);
	    event.preventDefault();
	}
}