$(document).ready(function(){function e(e){var t=Math.floor(e/60),n=Math.floor(e%60);if(10>n)var a=t+":0"+n;else var a=t+":"+n;return a}function t(){1==i.paused?(i.play(),console.log("playy"),u.src="/assets/pause.png"):(i.pause(),console.log("pause"),u.src="/assets/play.png")}function n(){for(var e=i.duration,t=Math.floor(e/10)+1,n=0;t>n;n++){for(var a=100,r=0,o=0;a>o;o++);var u=document.getElementById("comment_bubbles"),m=document.createElement("img");m.className="comment_img",m.src="/assets/comment.png",m.id="_"+n,m.style.marginLeft=800/t-15+"px",m.style.opacity=r/a*3+.5,null==document.getElementById(m.id)&&u.appendChild(m)}}function a(){for(var e=document.getElementsByClassName("individual_comment"),t=0;t<e.length;t++){var n=e[t].id;document.getElementById(n).addEventListener("click",function(e){var t=100/i.duration*e.target.id;l.value=t;var n=i.duration*(l.value/100);i.currentTime=n,i.play(),u.src="/assets/pause.png"})}}function r(){for(var e=document.getElementsByClassName("comment_img"),t=0;t<e.length;t++){var n=e[t].id;document.getElementById(n).addEventListener("click",function(e){var t=e.target.id,n=t.slice(1),a=100/i.duration*n*10;l.value=a;var r=i.duration*(l.value/100);i.currentTime=r,i.play(),u.src="/assets/pause.png";for(var o=i.duration,m=Math.floor(o/10)+1,d=0;m>d;d++)$("#_"+d).animate({width:"20px",height:"17px"},200);var c=Math.floor(i.currentTime/10);$("#_"+c).animate({width:"25px",height:"22px"},200)})}}var o=document.getElementById("recent_video");null!=o&&o.addEventListener("loadedmetadata",function(){$(".put_duration").html(e(o.duration))});var i=document.getElementById("myvideo"),u=document.getElementById("play-pause"),m=document.getElementById("full-screen"),d=document.getElementById("mute"),l=document.getElementById("seek-bar"),c=document.getElementById("volume-bar");i.addEventListener("loadeddata",function(){console.log("loaded meta data"),duration=i.duration,$("#duration").html("/ "+e(duration)),n(),a(),r()}),u.addEventListener("click",function(){t()}),m.addEventListener("click",function(){i.requestFullscreen?i.requestFullscreen():i.mozRequestFullScreen?i.mozRequestFullScreen():i.webkitRequestFullscreen&&i.webkitRequestFullscreen()}),l.addEventListener("change",function(){console.log("Change");var t=i.duration*(l.value/100);i.currentTime=t;var n=100/i.duration*i.currentTime;l.value=n,$("#current_time").html(e(i.currentTime));var a=Math.floor(i.duration)/10,r=800/a,o=Math.floor(i.currentTime/10),u=r*o,m=10*Math.floor(o);$("#ind_comment_container").html(""),$("#pointer").css({marginLeft:u+"px"}),$("#_"+o).animate({width:"25px",height:"22px"},200),$("#start_time").html(e(m)),$("#end_time").html(e(m+10));for(var d=0;d<fake_comments.length;d++)fake_comments[d].getTimeStamp()>m&&fake_comments[d].getTimeStamp()<m+10&&fake_comments[d].render_stamp()}),l.addEventListener("mousedown",function(){var e=Math.floor(i.currentTime/10);$("#_"+e).animate({width:"20px",height:"17px"},200),i.pause()}),l.addEventListener("mouseup",function(){i.play(),u.src="/assets/pause.png"}),i.addEventListener("timeupdate",function(){var t=100/i.duration*i.currentTime;l.value=t,$("#current_time").html(e(i.currentTime));var n=Math.floor(i.duration)/10,r=800/n,o=Math.floor(i.currentTime)/10,u=o-1,m=r*o,d=10*Math.floor(o);Math.floor(i.currentTime)%10==0&&(console.log("jumpval",m),$("#ind_comment_container").html(""),$("#_"+o).animate({width:"25px",height:"22px"},200),$("#_"+u).animate({width:"20px",height:"17px"},200),$("#start_time").html(e(d)),$("#end_time").html(e(d+10)),$("#pointer").css({marginLeft:m+"px"}),a())}),i.addEventListener("click",function(){}),d.addEventListener("click",function(){0==i.muted?(i.muted=!0,c.value=0,i.volume=0,d.src="/assets/mute.png"):(i.muted=!1,c.value=1,i.volume=1,d.src="/assets/audio.png")}),c.addEventListener("change",function(){i.volume=c.value})});