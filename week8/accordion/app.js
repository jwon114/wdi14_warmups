// build an accordion menu like the one in the image above.
// All menu items except the first should be hidden by default. Clicking on one should reveal it. Clicking again should hide it. Your accordion menu should work with any number of list items (not hardcoded to 3, for example). You can use jQuery, but write your own code for the implementation.

// bonus

// Try to mimic the design above as closely as you can. Use an icon framework like fontawesome to add the icons.

// trivia: This was given to one of the previous WDI students as a coding test.

$('.accordion-button').on('click', function() {
	$panel = $($(this).next()[0]);
	$panel.slideToggle().toggleClass('active')
	$(this).toggleClass('active')
	$arrowChild = $($(this).find('.arrow')[0])
	$arrowChild.toggleClass('fa-chevron-down fa-chevron-up');
	
	console.log($(this).find('.fa.fa-chevron-down.fa-3x')[0]);

	// console.log(event.target);
	console.log(this);

})