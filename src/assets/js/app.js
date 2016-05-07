(function($) {
	
	"use strict";
  
  var scrolltoElement = function(e) {
    e.preventDefault();
    var self = $(this),
        correction = e.data ? e.data.correction ? e.data.correction : 0 : 0;
    $('html, body').animate({'scrollTop': $(self.attr('href')).offset().top - correction }, 400);
  };
	
  var closeMenu = function(e) {
	  e.stopPropagation();
    $('body').removeClass('menu-open');
		$('.site-nav-switch').removeClass('active');
  };
  
  var toggleMenu = function(e) {
	  e.stopPropagation();
	  $('body').toggleClass('menu-open');
    $('.site-nav-switch').toggleClass('active');
  };
  
  var pixivArchiveStat = function() {
    var vol = $(".single .content ul").length;
    var artistCount = $(".single .content ul li").length;
    $("#pixiv-vol").text(vol);
    $("#pixiv-artist-count").text(artistCount);
  };
	
	$(function() {
		$('#footer, #main').addClass('loaded');
		$('.site-nav-switch').on('click', toggleMenu);
		$(document).on('click', closeMenu);
		$('.site-menu').on('click', function (e) {
			e.stopPropagation();
		});
		$('.window-nav, .go-comment').on('click', scrolltoElement);

		setTimeout(function() {
	    $('#loading-bar-wrapper').fadeOut(500);
	  }, 300);
	  
	  if ($('body').hasClass('tag-pixiv') && $("body").hasClass('page')) {
  	  pixivArchiveStat();
	  }
	});
		
})(jQuery);