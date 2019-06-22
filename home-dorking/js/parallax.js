$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
    
});

/* Scroll capas fondo */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#bg-edificios-1').css('top',(0-(scrolled*.20))+'px');
	$('#bg-edificios-2').css('top',(0-(scrolled*.18))+'px');
	$('#bg-edificios-3').css('top',(0-(scrolled*.16))+'px');
	$('#bg-edificios-4').css('top',(0-(scrolled*.14))+'px');
	$('#asotea').css('top',(0-(scrolled*.30))+'px');
	$('#franja-negra-fotografia').css('top',(0-(scrolled*.30))+'px');
	$('#luces-camara').css('top',(0-(scrolled*.30))+'px');
	$('#jeiminson-globos').css('top',(0-(scrolled*.38))+'px');
	$('#made-fotografia').css('top',(0-(scrolled*.30))+'px');
	$('#fotografia-text').css('top',(0-(scrolled*.25))+'px');
	$('#parrafo-fotografia').css('top',(0-(scrolled*.30))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
}
