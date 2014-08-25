$(document).ready(function ()
{

	var navWrap = $(".js-nav-wrap"),
		nav = navWrap.find(".js-nav"),
		navExpand = navWrap.find(".js-nav-expand");
	
	navExpand.on('click', function(){
		nav.slideToggle();
	});
	
});
