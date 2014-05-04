	function drawChart(id, yes, no, yes_to_no, no_to_yes) {
		var rec_ctx = document.getElementById(id).getContext("2d");
		var data = [
			{value: yes,
				color:"#609f45"},
			{value : no,
				color : "#b23e2a"},
			{value : yes_to_no,
				color : "#f18b40"},
			{value : no_to_yes,
				color : "#d1d68b"}]
		var recvid_chart = new Chart(rec_ctx).PolarArea(data);
		new Chart(rec_ctx).Pie(data);
	}

$(document).ready(function(){

	//Side menu pull out
	$('#nav_menu').sidr({side:'right'});

	

	$(".video").mouseover(function(){
		var id = $(this).attr('id');
		// alert("div#videotext"+id+".videotext");
		var targetDiv =$("#videotext"+id);
		$(targetDiv).fadeOut(100);
	})
	.mouseout(function(){
		var id = $(this).attr('id');
		// alert("div#videotext"+id+".videotext");
		var targetDiv =$("#videotext"+id);
		$(targetDiv).fadeIn(200);
	});

	$('#upload').colorbox({width:"600px", height:"300px", inline:true, href:"#uploadcontent",
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