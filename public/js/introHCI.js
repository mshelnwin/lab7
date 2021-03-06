'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').click(projectClick);
}

function projectClick(e) {
	//prevent page from reloading
	e.preventDefault();

	ga('create', 'UA-114596888-1', 'auto');
	//google analytics event
	ga('send','event','like','click');
}