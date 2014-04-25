$(document).ready(function() {
	var video=document.getElementById("video"); 
	$('#cmtbtn').click(function(){
	  		// $('#comment_list').append($('#comment').val()+ '<br>');
	  		$('#comment_list').append('<div id="individual_comment"><table border="1" id="cmt_table"><th id="time_stamp">'+$('#comment').val().substring(1,5)+
									'</th><th id="comment_text">'+$('#comment').val().substring(6)+'</div>')
	  		$('#comment').val('');
	  		video.play();
	  	});


	$('#changevote1').keyup(function(){
		if(event.keyCode == 13){
			$("#yeschange").click();
		}
	});

	$('#changevote2').keyup(function(){
		if(event.keyCode == 13){
			$("#yeschange2").click();
		}
	});

	$("#comment").keydown(function(event){ 
		if(event.keyCode == 13){
			$("#cmtbtn").click();
		}
		else if (!video.paused){
			video.pause();
		}
		console.log("get here?")

		var minutes = Math.floor(video.currentTime/60);
		var seconds = Math.floor(video.currentTime-minutes*60)
		if (seconds<10){
			seconds='0'+seconds
		}
		if ($('#comment').val().length==1){
			console.log("get here?now")
			$('#comment').val('['+minutes+":"+seconds+'] '+$('#comment').val());
		}

	});



	$(window).click(function(e) {
		if ((42<=event.clientX<=660) && (126<=event.clientY<=200)){
			// console.log("HELLOO")
			// console.log(event.clientX)
			// console.log(event.clientY)
			// if (video.paused){
			// 	video.play();
			// }
			// else{
			// 	video.pause();
			// }

		}
	});


	$('#sold').click(function(){
		$('#areyousold').addClass('hidden')
		$('#solddisplay').removeClass('hidden')
	});

	$('#notsold').click(function(){
		$('#areyousold').addClass('hidden')
		$('#notsolddisplay').removeClass('hidden')
	});


	$('#changebtn').click(function(){

		$('#confirmfromsold').removeClass("hidden");
		$('#solddisplay').addClass('hidden');
		$('#changevote1').focus()

		$('#yeschange').click(function(){
			if ($("#changevote1").val().length===0){
				console.log("lengthbelow")
				console.log($("#changevote1").val().length);
				alert("You must provide a reason for changing")
			}	
			else{
				console.log("alert?")
				console.log($("#changevote1").val().length)
				console.log($("#changevote1").val())
				$('#confirmfromsold').addClass("hidden");
				$('#notsolddisplay').removeClass('hidden');
			}
		})
		$('#nochange').click(function(){
			$('#confirmfromsold').addClass("hidden");
			$('#solddisplay').removeClass('hidden');
		})
	});

	$('#changebtn2').click(function(){

		$('#confirmfromnotsold').removeClass("hidden");
		$('#notsolddisplay').addClass('hidden');
		$('#changevote2').focus()

		$('#yeschange2').click(function(){
			if ($("#changevote2").val().length==0){
				alert("You must provide a reason for changing")
			}
			else{
				$('#confirmfromnotsold').addClass("hidden");
				$('#solddisplay').removeClass('hidden');
			}
		});
		$('#nochange2').click(function(){
			$('#confirmfromnotsold').addClass("hidden");
			$('#notsolddisplay').removeClass('hidden');
		});

	});

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
	    if (video.paused == true) {
	    // Play the video
	    video.play();
	  } else {
	    // Pause the video
	    video.pause();
	  }
	}


	video.addEventListener("click", function() {
    	togglePlay();
  	});


});
