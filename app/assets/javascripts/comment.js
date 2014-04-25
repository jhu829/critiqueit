

//isChange is either false, "y2n" or "n2y"
var Comment = function(text, author, isChange, timeStamp ) {

	this.text = text;			
	this.author = author;
	this.timeStamp = timeStamp;
	this.isChange = isChange;

	if (isChange) {
		this.timeStamp = -1;
	}

	this.getTimeStamp = function() {
		return this.timeStamp;
	}

	this.render_change = function() {
		if (this.isChange == "y2n") {
			var parent = document.getElementById('y2n_cmtbx');
		}
		else if (this.isChange == "n2y") {
			var parent = document.getElementById('n2y_cmtbx');
		}

		var change = document.createElement('p');
		change.className = 'ind_change_cmt';
		var cmt_txt = '<b class="author">'+this.author+': </b>'+
    										this.text;
    	change.innerHTML = cmt_txt;

    	parent.appendChild(change);
	}

	this.render_stamp = function() {
		var time = this.timeStamp;
		var minute = Math.floor(time/60);
		var second = time%60; 
		if (second<10) {
			second = '0'+second;
		}

		var render_time = minute+ ':'+second;

		var parent= document.getElementById('ind_comment_container');

		var comment = document.createElement('div');
		comment.className = 'individual_comment';
		comment.id = timeStamp;

		var comment_material = '<table border="1" class="cmt_table" id='+timeStamp+'><th class="time_stamp" id='+timeStamp+'>'+render_time+
								'</th><th class="comment_text" id='+timeStamp+'>'+ this.text +
								'<br/><p class="cmt_auth" id='+timeStamp+'>by '+this.author+'<p></th>';


	    comment.innerHTML = comment_material;
	    parent.appendChild(comment);

	    return comment;
	}
}
	
var dummy_comments2y= [];
var dummy_comments2n= [];
var random_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nisl tincidunt lectus accumsan aliquam. Etiam vitae elit est. Quisque quis eros sed turpis tristique eleifend. Donec sed lacinia enim, in ullamcorper sem. "

for (var i=0; i< 5; i++) {
	console.log("created comments")
	var author = 'user'+ i;
	var comment = new Comment(random_text, author, "n2y");
	dummy_comments2y.push(comment);
}

for (var i=5; i< 10; i++) {
	var author = 'user'+ i;
	var comment = new Comment(random_text, author, "y2n");
	dummy_comments2n.push(comment);
}

var fake_comments = [];
var filler_text = 'Nulla ornare ullamcorper imperdiet. Donec ac tempor lectus. '
var filler_text2 ='Quisque ultricies tortor est, at facilisis est pretium ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'

for (var i=0; i< 41; i++) {
	var author = 'userX'+ i;
	if (i< 10 || i>15 || i> 32) {
		if (i%3 == 0) {
			
				var comment = new Comment(filler_text, author, false, 2*i+1);
		}
		else {
				var comment = new Comment(filler_text2, author, false, 2*i+1);
			
		}
	}


	fake_comments.push(comment);
}


