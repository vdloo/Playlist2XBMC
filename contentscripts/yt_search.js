var linkbar = $(".result-item-main-content");
var linkcount = $(".result-item-main-content");
var search_current;
var youtube_id;
var object_amount = (linkcount.length);

//loop for adding the buttons
for(i=0;i<object_amount;i++){
	if(linkbar.children("h3")[i]){
		search_object = linkbar.children("h3")[i].innerHTML;
		youtube_id= search_object.split('href')[1];
		youtube_id = youtube_id.split('"')[1];
		youtube_id = youtube_id.split('v=')[1];
		if (youtube_id){
			var amprsnd = youtube_id.indexOf('&');
			if(amprsnd != -1) {
				youtube_id = youtube_id.substring(0, amprsnd);
			}
			console.log(youtube_id);
			search_current = linkbar[i];
			search_current.innerHTML += '<ul style="float: right;" class="single-line-lego-list"><li><a id="'+youtube_id+'" class="yt-badge-std playbutton" dir="ltr">play</a></li><li><a class="yt-badge-std plusbutton" id="'+youtube_id+'" dir="ltr">+</a></li></ul>'
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

