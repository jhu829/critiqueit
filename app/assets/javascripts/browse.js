$(document).ready(function(){
	$(".video").mouseover(function(){
		var id = $(this).attr('id');
		// alert("div#videotext"+id+".videotext");
		var targetDiv =$("#videotext"+id);
		console.log(targetDiv);

		$(targetDiv).fadeOut(100);
	})
	.mouseout(function(){
		var id = $(this).attr('id');
		// alert("div#videotext"+id+".videotext");
		var targetDiv =$("#videotext"+id);
		$(targetDiv).fadeIn(200);
	});

	$('#upload').colorbox({width:"600px", height:"200px", inline:true, href:"#uploadcontent",
		onClosed: function(){
			$('#uploadcontent').hide();
		},
		onOpen: function(){
			$('#uploadcontent').show();
		}}
	);
});

function uploaded(){
	$.colorbox.close();
	window.location.href = "uploader.html";
}