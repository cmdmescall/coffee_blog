$(document).ready(function() {

	$(".js--alone").waypoint(function(direction) {
		if (direction == "down") {
			$("nav").addClass('fixed-nav');
		} else {
			$("nav").removeClass('fixed-nav');
		}
	}, {
		offset: '60px;'
	});


	$(".js--scroll-hero").click(function() {
		$('html, body').animate({scrollTop: $(".js--hero").offset().top}, 1000);
	});
	$(".js--scroll-alone").click(function() {
		$('html, body').animate({scrollTop: $(".js--alone").offset().top - 110}, 1000);
	});
	$(".js--scroll-friends").click(function() {
		$('html, body').animate({scrollTop: $(".js--friends").offset().top - 110}, 1000);
	});
	$(".js--scroll-home").click(function() {
		$('html, body').animate({scrollTop: $(".js--home").offset().top - 110}, 1000);
	});

	$(".js--burger").click(function() {
		var navbar = $(".js--navbar");
		var burger = $(".js--burger");

		navbar.toggle("slow");

		if (burger.hasClass('ion-navicon-round')) {
			burger.addClass('ion-close-round').removeClass('ion-navicon-round');

		} else {
			burger.removeClass('ion-close-round').addClass('ion-navicon-round');
		}

	});

});