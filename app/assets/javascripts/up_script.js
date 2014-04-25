$(document).ready(function() {
	//yes, no, yes to no, no to yes
	var graph_color = ["yes","#66BC45","no", "#F04F22", "y2n", "#F7921D","n2y","#DDE794"];
	var sold_data = [168,72,32,27]; 

	function drawCircle(color_state, size, total) {
		var outer = true;
		if (color_state == "yes") {
			var circle = $('#yes_c');
			var color = graph_color[1];
		}
		else if (color_state == "no") {
			var circle = $('#no_c');
			var color = graph_color[3];
		}
		else if (color_state == "y2n") {
			outer = false;
			var out_mar = $('#no_c').width();
			var circle = $('#y2n_c');
			var color = graph_color[5];
		}
		else {
			outer = false;
			var out_mar = $('#yes_c').width();
			var circle = $('#n2y_c');
			var color = graph_color[7];
		}

		var side = size/total*200;
		var radius = size/total*100;
		circle.css({ "background": color,
						"width": side+ 'px',
						"height": side+ 'px',
						"mozBorderRadius": radius+ 'px',
						"webkitBorderRadius": radius+ 'px',
						"borderRadius": radius+ 'px'
		});

		if (outer) {
			circle.css({ "marginLeft": 75-radius+ 'px'});
		}
		else {
			circle.css({ "marginLeft": -radius-out_mar/2-4+'px'});
		}

	}

	var total = sold_data[0]+sold_data[1]+sold_data[2]+sold_data[3];
	for (var i=0; i<sold_data.length; i++) {
		if (sold_data[i]>0) {
			drawCircle(graph_color[2*i], sold_data[i], total);
		}
	}
	$("#num_sold").html(sold_data[0] + '');
	$("#num_n2y").html(sold_data[3] + '');
	$("#num_not_sold").html(sold_data[1] + '');
	$("#num_y2n").html(sold_data[2] + '');

	$("#num_n2y_c").html(sold_data[3] + '');
	$("#num_y2n_c").html(sold_data[2] + '');


	for (var m=0; m< dummy_comments2n.length; m++) {
		dummy_comments2n[m].render_change();
		dummy_comments2y[m].render_change();
	}

	for (var n=0; n< fake_comments.length; n++) {
		if (fake_comments[n].getTimeStamp() < 10) {
			fake_comments[n].render_stamp();
		}	
	}


	$('#y_c').hover(function() {
			$('#y_a').animate({'paddingLeft': '10px'}, 150)
		},
		function() {
			$('#y_a').animate({'paddingLeft': '0px'}, 150)
		}
	)

	$('#n_c').hover(function() {
			$('#n_a').animate({'paddingLeft': '10px'}, 150)
		},
		function() {
			$('#n_a').animate({'paddingLeft': '0px'}, 150)
		}
	)

	$('#bck_no').hover(function() {
			$('#bck_no_arw').animate({'right': '7%'}, 150)
		},
		function() {
			$('#bck_no_arw').animate({'right': '6%'}, 150)
		}
	)

	$('#bck_yes').hover(function() {
			$('#bck_yes_arw').animate({'right': '7%'}, 150)
		},
		function() {
			$('#bck_yes_arw').animate({'right': '6%'}, 150)
		}
	)

	$('#y_c').on('click',function (e) {
		$('#yes_container').animate({'opacity': '0'}, 300).css({'visibility': 'hidden'});
		$('#n2y_cmt').css({'opacity': '0', 
			'visibility': 'visible'}).animate({'opacity': '1.0'}, 300).delay(300);
	});

	$('#n_c').on('click',function (e) {
		$('#no_container').animate({'opacity': '0'}, 300).css({'visibility': 'hidden'});
		$('#y2n_cmt').css({'opacity': '0', 
			'visibility': 'visible'}).animate({'opacity': '1.0'}, 300).delay(300);
	});


	$('#bck_yes').on('click',function (e) {
		$('#n2y_cmt').animate({'opacity': '0'}, 300).css({'visibility': 'hidden'});
		$('#yes_container').css({'opacity': '0', 
			'visibility': 'visible'}).animate({'opacity': '1.0'}, 300).delay(300);
	});

	$('#bck_no').on('click',function (e) {
		$('#y2n_cmt').animate({'opacity': '0'}, 300).css({'visibility': 'hidden'});
		$('#no_container').css({'opacity': '0', 
			'visibility': 'visible'}).animate({'opacity': '1.0'}, 300).delay(300);
	});


});