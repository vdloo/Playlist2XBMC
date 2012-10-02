function callback_ping(result){
	if (result.result == "pong"){
		var playlistbar = document.getElementById('playlist-bar');
		var yt_play_string = '<a name="yt_play" class="yt-uix-expander-collapsed yt-uix-button yt-uix-button-default" id="yt_play">Play</a>'; //playbutton html
		var yt_queue_string = '<a name="yt_queue" class="yt-uix-expander-collapsed yt-uix-button yt-uix-button-default" id="yt_plus">+</a>'; //plusbutton html
		var yt_clear_string = '<a name="yt_clear" class="yt-uix-expander-collapsed yt-uix-button yt-uix-button-default" id="yt_clear">clear</a>'; //plusbutton html
		var yt_playlist_string="";
		if (!(playlistbar.className.indexOf("passive") >= 0)) {
			var playlist_ids = playlistbar.attributes[5].value;
			var playlist_array = new Array();
			playlist_array = playlist_ids.split(",");
			yt_playlist_string = '<a style="margin-left: auto;" name="yt_playlist" class="yt-uix-tooltip yt-uix-tooltip-masked yt-uix-button yt-uix-button-default start end" id="yt_playlist">Queue playlist</a>'; //playlistbutton html
		}
		document.getElementById('watch-headline-user-info').innerHTML += yt_play_string + yt_queue_string + yt_clear_string + yt_playlist_string; // injects buttons

		//gets the youtube video id from the current URL
		var youtube_id = document.URL.split('v=')[1];
		var amprsnd = youtube_id.indexOf('&');
		if(amprsnd != -1) {
			youtube_id = youtube_id.substring(0, amprsnd);
		}

		//play button action
		var yt_play = document.getElementById('yt_play');
		yt_play.addEventListener("click", function() {
			send_play(youtube_id);
		}, false);

		//plus button action
		var yt_plus = document.getElementById('yt_plus');
		yt_plus.addEventListener("click", function() {
			send_plus(youtube_id);
		}, false);

		//clear button action
		var yt_clear = document.getElementById('yt_clear');
		yt_clear.addEventListener("click", function() {
			send_clear();
		}, false);

		//queue playlist button action
		var yt_playlist = document.getElementById('yt_playlist');
		if (yt_playlist){
			yt_playlist.addEventListener("click", function() {
				id_array(playlist_array);
			}, false);
		}
	}
	else{
	var xbmc_offline_string = '<a name="yt_offline" class="yt-uix-expander-collapsed yt-uix-button yt-uix-button-default" id="yt_offline">XBMC offline, check settings?</a>'; 
	document.getElementById('watch-headline-user-info').innerHTML += xbmc_offline_string;
	var yt_offline = document.getElementById('yt_offline');
	yt_offline.addEventListener("click", function() {
		send_clear();
	}, false);
	}
}
tryjsonrpc(callback_ping);
