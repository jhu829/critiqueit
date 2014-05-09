$(document).ready(function(){
	$('#search_bar').on('change',function(){
		$(this).autocomplete({
			autoFocus:true,
			select: function(e,ui){
				$('#search_button').trigger("click");
			}
		});
		$.ajax({
			url: "<%= autocomplete_video_path %>",
			type:"GET",
			dataType:"json",
			data:{title: $('#search_bar').value},
			success:function(data){
				var videos=data.videos
				$('#search_bar').autocomplete("option","source",videos);
			},
			error:function(){
				console.log("AJAX ERROR");
			}
		});
	});
	$('#search_button').click(function(){
		$.ajax({
			url: "<%= search_video_path %>",
			type:"GET",
			dataType:"json",
			data:{title: $('#search_bar').value},
			error:function(){
				console.log("AJAX2 ERROR");
			}
		});
	});
});