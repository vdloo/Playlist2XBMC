function addbuttons(){
	var linkbar = $(".feed-item-thumb");
	var object_amount = (linkbar.length);
	var j=0;
	for(i=0;i<object_amount;i++){
		search_object = linkbar[i];
		youtube_id = linkbar.children("a")[i].href;
		youtube_id = youtube_id.split('v=')[1];
		var amprsnd = youtube_id.indexOf('&');
		if(amprsnd != -1) {
			youtube_id = youtube_id.substring(0, amprsnd);
		}
		if (linkbar[i].className!="ux-thumb-wrap contains-addto yt-uix-sessionlink"){
			j++;
			search_object.innerHTML += '<span style="top: 20px;" class="feed-item-show-more"><button type="button" id="'+youtube_id+'" class="yt-uix-button yt-uix-button-default playbutton" role="button"><span class="yt-uix-button-content">play</span></button><button type="button" id="'+youtube_id+'" class="yt-uix-button yt-uix-button-default plusbutton" role="button"><span class="yt-uix-button-content">+</span></button></span>';
		}
	}

	//loop for sending json matching the buttons, similar to as in yt_search.js
	for(i=0;i<j;i++){
		var getplaybutton = $(".playbutton")[i];
		getplaybutton.onclick = (function(value) {
			return function() {
				var local_id = $(".playbutton")[value].id;
				send_play(local_id);
			}
		})(i);
		var getplusbutton = $(".plusbutton")[i];
		getplusbutton.onclick = (function(value) {
			return function() {
				var local_id = $(".plusbutton")[value].id;
				send_plus(local_id);
			}
		})(i);

	}
}
addbuttons();
$(document).ready(function() {
	$('.feed-load-more').click(function() {
		setTimeout("addbuttons()", 2000)
        });
});
