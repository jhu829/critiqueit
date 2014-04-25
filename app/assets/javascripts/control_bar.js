$(document).ready(function(){

  function getVideoTime(duration) {
    var minutes = Math.floor(duration/60);
    var seconds = Math.floor(duration%60);

    if (seconds<10) {
      var print_time= minutes+":0"+seconds;
    }
    else {
      var print_time= minutes+":"+seconds;
    }
    return print_time;
  }

  var video = document.getElementById("video");

  var playButton = document.getElementById("play-pause");
  var fullScreenButton = document.getElementById("full-screen");
  var muteButton = document.getElementById("mute");

  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");

  var comment_divs =[];

  function togglePlay() {
      if (video.paused == true) {
      // Play the video
      video.play();
      playButton.src = 'images/pause.png';
    } else {
      // Pause the video
      video.pause();
      playButton.src = 'images/play.png';
    }
  }

  function addCommentBubbles() {

    var duration = video.duration;
    var totalJumps = Math.floor(duration/10)+1;


    for( var j=0;j<totalJumps;j++){

      var totalComments = fake_comments.length;
      var comment_count = 0;

      for (var c=0; c<totalComments; c++) {
        if (fake_comments[c].getTimeStamp() > j*10 ) {
          if (fake_comments[c].getTimeStamp() < (j+1)*10 ) {
            comment_count += 1;
          }
        }
      }
      var parent = document.getElementById("comment_bubbles");
      var bubble = document.createElement('img');
      bubble.className = 'comment_img';
      bubble.src = 'images/comment.png';
      bubble.id = '_'+j; 
      bubble.style.marginLeft = 800/totalJumps-15+'px';
      bubble.style.opacity = comment_count/totalComments*3+0.2;
      parent.appendChild(bubble);
    }
  }

  function clickableComments() {
    var div_time = document.getElementsByClassName('individual_comment');
    for (var d=0;d<div_time.length;d++) {
      var time = div_time[d].id;
      document.getElementById(time).addEventListener("click", function(e) {

        var value = (100 / video.duration) * e.target.id;
        seekBar.value = value;
        var time = video.duration * (seekBar.value / 100);
         video.currentTime = time;
         video.play();
        playButton.src = 'images/pause.png';

      });
    }
  }

  function clickableBubbles() {
    var img_time = document.getElementsByClassName('comment_img');
    for (var d=0;d<img_time.length;d++) {
      var time = img_time[d].id;
      document.getElementById(time).addEventListener("click", function(e) {
        var id_raw = e.target.id;

        var id = id_raw.slice(1);
        
        var value = (100 / video.duration) * id*10;
        seekBar.value = value;
        var time = video.duration * (seekBar.value / 100);
         video.currentTime = time;
         video.play();
        playButton.src = 'images/pause.png';

        var duration = video.duration;
        var totalJumps = Math.floor(duration/10)+1;

        for( var j=0;j<totalJumps;j++){
            $('#_'+j).animate({'width' : '20px', 
                                 'height': '17px'}, 200);
          }
        var current_jump = Math.floor(video.currentTime/10);
        $('#_'+current_jump).animate({'width' : '25px', 
                                 'height': '22px'}, 200);

      });
    }
  }

  video.addEventListener('loadedmetadata', function() {
      duration = video.duration;
      $("#duration").html('/ '+getVideoTime(duration));
      addCommentBubbles();
      clickableComments();
      clickableBubbles();
  });




playButton.addEventListener("click", function() {
  togglePlay();
});

fullScreenButton.addEventListener("click", function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});

 seekBar.addEventListener("change", function() {
 // Calculate the new time
     var time = video.duration * (seekBar.value / 100);

     // Update the video time
     video.currentTime = time;

     var value = (100 / video.duration) * video.currentTime;
     seekBar.value = value;
     $("#current_time").html(getVideoTime(video.currentTime));

     var total_jump = Math.floor(video.duration)/10;
     var single_jump = 800/total_jump;
     var current_jump = Math.floor(video.currentTime/10);
     var jump_value = single_jump*current_jump;

     var stamp = Math.floor(current_jump)*10;

     $('#ind_comment_container').html('');
     $('#pointer').css({"marginLeft": jump_value+'px'});

     console.log("hello")
     console.log(current_jump)

     $('#_'+current_jump).animate({'width' : '25px', 
                                     'height': '22px'}, 200);
     $('#start_time').html(getVideoTime(stamp));
    $('#end_time').html(getVideoTime(stamp+10));
     for (var n=0; n< fake_comments.length; n++) {
       if (fake_comments[n].getTimeStamp() > stamp && fake_comments[n].getTimeStamp() < stamp+10) {
         fake_comments[n].render_stamp();
       } 
     }

});




seekBar.addEventListener("mousedown", function() {
 var current_jump = Math.floor(video.currentTime/10);
 $('#_'+current_jump).animate({'width' : '20px', 
                                 'height': '17px'}, 200);
 video.pause();
});


seekBar.addEventListener("mouseup", function() {
  video.play();
  playButton.src = 'images/pause.png';
});

video.addEventListener("timeupdate", function() {
  var value = (100 / video.duration) * video.currentTime;
  seekBar.value = value;
  $("#current_time").html(getVideoTime(video.currentTime));

  var total_jump = Math.floor(video.duration)/10;
  var single_jump = 800/total_jump;
  var current_jump = Math.floor(video.currentTime)/10;
  var last_jump = current_jump-1;
  var jump_value = single_jump*current_jump;

  var stamp = Math.floor(current_jump)*10;


  if (Math.floor(video.currentTime)%10 == 0) {
    $('#ind_comment_container').html('');
    $('#_'+current_jump).animate({'width' : '25px', 
                                  'height': '22px'}, 200);
    $('#_'+last_jump).animate({'width' : '20px', 
                                  'height': '17px'}, 200);
    $('#start_time').html(getVideoTime(stamp));
    $('#end_time').html(getVideoTime(stamp+10));

    $('#pointer').css({"marginLeft": jump_value+'px'});
    for (var n=0; n< fake_comments.length; n++) {
      if (fake_comments[n].getTimeStamp() > stamp && fake_comments[n].getTimeStamp() < stamp+10) {
        fake_comments[n].render_stamp();
      } 
    }
    clickableComments();


  }
});



  video.addEventListener("click", function() {
    togglePlay();
  });

muteButton.addEventListener("click", function() {
  if (video.muted == false) {
    video.muted = true;
    volumeBar.value = 0;
    video.volume = 0;
    muteButton.src = 'images/mute.png';
  } else {
    video.muted = false;
    volumeBar.value = 1.0;
    video.volume = 1.0;
    muteButton.src = 'images/audio.png'
  }
});


volumeBar.addEventListener("change", function() {
    // Update the video volume
    video.volume = volumeBar.value;
  });
});
