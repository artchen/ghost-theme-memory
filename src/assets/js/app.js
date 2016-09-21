var customSearch;

(function($) {
	
	"use strict";
	
	// options
	var SEARCH_SERVICE = 'google';
	var EXCERPT_GENERATOR_ENABLE = true;
  
	var GOOGLE_CUSTOM_SEARCH_API_KEY = 'AIzaSyDGd5JJH7rR3sgS-JPYblwJ72GOsqzighc';
	var GOOGLE_CUSTOM_SEARCH_ENGINE_ID = '017821029378163458527:msqkochcsj0';
  var ALGOLIA_API_KEY = '';
  var ALGOLIA_APP_ID = '';
  var ALGOLIA_INDEX_NAME = '';
  var AZURE_SERVICE_NAME = '';
  var AZURE_INDEX_NAME = '';
  var AZURE_QUERY_KEY = '';
  var BAIDU_API_KEY = '';

	var excerptGenerator = {};
  
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
  
  var ExcerptGenerator = function(selector) {
    var self = this;
    self.init = function() {
      $(selector).each(function() {
        var post = $(this);
        var permalink = post.find('h2.title > a').attr('href');
        var contentTag = post.find('section.content');
        var contentLoadingTag = post.find('.content-loading');
        var content = contentTag.html();
        var re = /<!-- *more *-->(.|\n)*/i;
        var excerpt = content.replace(re,"");
        if (content.length !== excerpt.length) {
          excerpt += "<a href='" +permalink+ "' class='readmore'>Read More...</a>";
        }
        contentTag.html(excerpt);
        contentTag.addClass('excerpt-ready');
        contentLoadingTag.addClass('excerpt-ready');
      });
    };
    self.init();
  };
	
	$(function() {
		$('#footer, #main').addClass('loaded');
		$('.site-nav-switch').on('click', toggleMenu);
		$(document).on('click', closeMenu);
		$('.site-menu').on('click', function(e) {
			e.stopPropagation();
		});
		$('.window-nav, .go-comment').on('click', scrolltoElement);

		setTimeout(function() {
	    $('#loading-bar-wrapper').fadeOut(500);
	  }, 300);
	  
	  if ($('body').hasClass('tag-pixiv') && $("body").hasClass('page')) {
  	  pixivArchiveStat();
	  }
	  if (EXCERPT_GENERATOR_ENABLE) {
      excerptGenerator = new ExcerptGenerator('.post-list .post');
    }
	  if (SEARCH_SERVICE === 'google') {
  	  customSearch = new GoogleCustomSearch({
    	  apiKey: GOOGLE_CUSTOM_SEARCH_API_KEY,
    	  engineId: GOOGLE_CUSTOM_SEARCH_ENGINE_ID,
        imagePath: "/assets/img/"
  	  });
	  }
    else if (SEARCH_SERVICE === 'algolia') {
      customSearch = new AlgoliaSearch({
        apiKey: ALGOLIA_API_KEY,
        appId: ALGOLIA_APP_ID,
        indexName: ALGOLIA_INDEX_NAME,
        imagePath: "/assets/img/"
      });
    }
    else if (SEARCH_SERVICE === 'hexo') {
      customSearch = new HexoSearch({
        imagePath: "/assets/img/"
      });
    }
    else if (SEARCH_SERVICE === 'azure') {
      customSearch = new AzureSearch({
        serviceName: AZURE_SERVICE_NAME,
        indexName: AZURE_INDEX_NAME,
        queryKey: AZURE_QUERY_KEY,
        imagePath: "/assets/img/"
      });
    }
    else if (SEARCH_SERVICE === 'baidu') {
      customSearch = new BaiduSearch({
        apiId: BAIDU_API_KEY,
        imagePath: "/assets/img/"
      });
    }
	});
		
})(jQuery);