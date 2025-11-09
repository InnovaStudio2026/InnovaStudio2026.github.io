$('document').ready( function(){	
	$('dt').on('mouseenter', function(){
		$(this)
			.next()
			.slideDown()
			.siblings('dd')
			.slideUp(300);
		});	
	});