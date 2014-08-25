$(function ()
{
	/**
	 * naw expand
	 * @type {*|jQuery|HTMLElement}
	 */
	var navWrap = $(".js-nav-wrap"),
		nav = navWrap.find(".js-nav"),
		navExpand = navWrap.find(".js-nav-expand");

	navExpand.on('click', function ()
	{
		nav.slideToggle();
	});


	/**
	 * carousel
	 */
	$('.jcarousel')
		.on('jcarousel:create jcarousel:reload', function ()
		{
			var element = $(this),
				width = element.innerWidth();

		
			if (width > 900)
			{
				width = width / 3 - 30;
			}
			else if (width > 600)
			{
				width = width / 2 - 30;
			}
			else if (width > 320)
			{
				width = width - 30;
			}
			// This shows 1 item at a time.
			// Divide `width` to the number of items you want to display,
			// eg. `width = width / 3` to display 3 items at a time.
			element.jcarousel('items').css('width', width + 'px');
		})
		.jcarousel({
			// Your configurations options
		});

	$('.jcarousel-prev').click(function ()
	{
		$('.jcarousel').jcarousel('scroll', '-=1');
	});

	$('.jcarousel-next').click(function ()
	{
		$('.jcarousel').jcarousel('scroll', '+=1');
	});


});
