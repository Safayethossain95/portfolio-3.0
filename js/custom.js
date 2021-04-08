$(function(){
   
    $("#typed").typed({
			strings: ["Safayet", "a web designer","a web developer"],
			typeSpeed: 30,
            backSpeed: 40,
            loop: true
		});
    
     $('.testslidermain').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
    arrows:false,
        dots:true,
   
});
   
    new WOW().init();

wow = new WOW(
{
boxClass:     'wow',      // default
animateClass: 'animated', // default
offset:       0,          // default
mobile:       true,       // default
live:         true        // default
}
)
wow.init();
    
      var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top + 5
                }, 1000);
                return false;
            }
        }
    });
    
});