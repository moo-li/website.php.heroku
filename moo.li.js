/*jslint eqeqeq: true, immed: true, nomen: true, onevar: true, regexp: true, undef: true */
/*global window, $ */ // For JSLint
function windowResize() {
	var	windowWidth = $(window).width(),
		windowHeight = $(window).height();

	// Limit text width for readability if the browser window is wider
	if (windowWidth > 511) {
		$('div#text').css('width', '480px');
	} else {
		$('div#text').css('width', 'auto');
	}

	// Show logo if browser is wide enough
	if (windowWidth > 724) {
		$('img#logo').show();
//		$('div#top').css('margin-left', '244px');
		$('div#top').css('margin-left', '1em');
	} else {
		$('img#logo').hide();
		$('div#top').css('margin-left', '1em');
	}

	// Put the footer at the bottom
	$('.footer').css({position:'absolute', width:620, top:windowHeight - 50, left:0});
}

$('html').addClass('script-trigger');

$(function() {
	// Add event to reveal dd when dt is clicked
//	$('dt').append('<img src="moo.li/_system/images/down.png" class="text-separator" />').wrapInner('<a href="#"></a>').click(
	$('dt').wrapInner('<a href="#"></a>').click(
		function(e) {
			var dd = $(this).next();
			
			// Anchors are fake - we don't want to follow the link
			if (e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false; // IE
			}

			// Show or hide the text below the heading
			if (dd.is(':hidden')) {
				$(this).find('.text-separator').hide();
				dd.slideDown();
			} else {
				$(this).find('.text-separator').show();
				dd.slideUp();
			}
		}
	).filter(':first').click();

	// Handle browser window size differences
	windowResize();		// Do it now

	$(window).resize(function() {
		windowResize();	// Do it whenever we resize
	});

	// Remove anchor from menu item for the current page
	var	thisPage	= $('ul.menu').attr('id'),
		thisAnchor	= $('ul.menu li a[href=' + thisPage + ']'),
		thisText	= thisAnchor.text();

	thisAnchor.replaceWith(thisText);
});
