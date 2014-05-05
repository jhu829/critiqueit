$(document).ready(function() {
	
	/*COMMENTS AREA*/

	$('#hidecomments').click(function(){
		$('#hidecomments').addClass('hidden');
		$('#comments').addClass('hidden');
		$('#showcomments').removeClass('hidden');
	});

	$('#showcomments').click(function(){
		$('#comments').removeClass('hidden');
		$('#hidecomments').removeClass('hidden');
		$('#showcomments').addClass('hidden');
	});

	function togglePlay() {
	    if (yourvideo.paused == true) {
	    // Play the video
	    yourvideo.play();
	  } else {
	    // Pause the video
	    yourvideo.pause();
	  }
	}


	yourvideo.addEventListener("click", function() {
    	togglePlay();
  	});


});
