// Scroll to Top Button
jQuery(document).ready(function(){
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.TopButton').fadeIn();
		} else {
			jQuery('.TopButton').fadeOut();
		}
	});
	jQuery('.TopButton').click(function(){
		jQuery('html, body').animate({scrollTop : 0},800);
		return false;
	});
});

// full screen search
jQuery(function () {
	$('a[href="#search"]').on('click', function(event) {
		event.preventDefault();
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});
	
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});
	
	
	//Do not include! This prevents the form from submitting for DEMO purposes only!
	/*$('form').submit(function(event) {
		event.preventDefault();
		return false;
	})*/
});

// collapse change icon
jQuery(function(){
	$('.collapse-wrap .btn').on('click', function(){
		$(this).find('.fa').toggleClass('fa-minus');
		
		$(this).toggleClass('btn1');
		
	});
});

jQuery('.parnter-list').owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	dots: false,
	autoplay: true,
	navText: [
	"<i class='fa fa-angle-left'></i>",
	"<i class='fa fa-angle-right'></i>"
	],
	responsive:{
		0:{
			items:2
		},
		600:{
			items:4
		},
		1000:{
			items:4
		}
	}
});
jQuery('.news-list').owlCarousel({
	loop:false,
	margin:10,
	nav:false,
	dots: true,
	autoplay: false,
	navText: [
	"<i class='fa fa-angle-left'></i>",
	"<i class='fa fa-angle-right'></i>"
	],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:4
		}
	}
});

jQuery('.fb-post-list').owlCarousel({
	loop:false,
	margin:10,
	nav:true,
	dots: true,
	autoplay: false,
	navText: [
	"<i class='fa fa-angle-left'></i>",
	"<i class='fa fa-angle-right'></i>"
	],
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1000:{
			items:1
		}
	}
});