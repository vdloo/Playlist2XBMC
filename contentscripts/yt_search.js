var linkbar = document.getElementById("search-results");
var linkcount = $(".yt-lockup-thumbnail");
var search_current;
var youtube_id;
var object_amount = (linkcount.length);

//loop for adding the buttons
for(i=0;i<object_amount;i++){
	if(linkcount.children("a")[i].href){
		search_object = linkcount.children("a")[i].href;
		youtube_id = search_object.split('v=')[1];
		if (youtube_id){
			var amprsnd = youtube_id.indexOf('&');
			if(amprsnd != -1) {
				youtube_id = youtube_id.substring(0, amprsnd);
			}
			search_current = linkbar.children[i];
			console.log(search_current);
			search_current.innerHTML += '<ul style="float: right; position: relative; top: -20px;" class="single-line-lego-list"><li><a id="'+youtube_id+'" class="yt-badge-std playbutton" dir="ltr">play</a></li><li><a class="yt-badge-std plusbutton" id="'+youtube_id+'" dir="ltr">+</a></li></ul>'
		}
	}
}

var clickable_amount = $(".playbutton").length;

//loop for sending json matching the buttons
for(i=0;i<clickable_amount;i++){
	var getplaybutton = $(".playbutton")[i].id;
	$(".playbutton")[i].onclick = (function(value) {
		return function() {
			var local_id = $(".playbutton")[value].id;
			send_play(local_id);
		}
	})(i);
	var getplusbutton = $(".plusbutton")[i].id;
	$(".plusbutton")[i].onclick = (function(value) {
		return function() {
			var local_id = $(".plusbutton")[value].id;
			send_plus(local_id);
		}
	})(i);
}

