function send_plus(video_id){
	var getactiveplayers = '{"jsonrpc": "2.0", "method": "Player.GetActivePlayers", "id": 1}';
	xbmcsend(getactiveplayers,function( result ){
		if (jQuery.isEmptyObject(result.result)){
			var clearplaylist ='{"jsonrpc": "2.0", "method": "Playlist.Clear", "params":{"playlistid":1}, "id": 1}'; 
			xbmcsend(clearplaylist,function( unused_result ){});
		}
		var addtoplaylist = '{"jsonrpc": "2.0", "method": "Playlist.Add", "params":{"playlistid":1,"item":{ "file" : "plugin://plugin.video.youtube/?action=play_video&videoid='+video_id+'"} }, "id": 1}';
		xbmcsend(addtoplaylist,function( unused_result ){});
		if (jQuery.isEmptyObject(result.result)){
			var startplaylist = '{"jsonrpc": "2.0", "method": "Player.Open", "params":{"item":{"playlistid":1, "position" : 0}}, "id": 1}';
			xbmcsend(startplaylist,function( unused_result ){});
		}
	});
}

function send_play(video_id){
	var getcurrentplaylist = '{"jsonrpc": "2.0", "method": "Playlist.GetItems", "params":{"playlistid":1}, "id": 1}'
	xbmcsend(getcurrentplaylist,function( result ){
		if(result.result.items){
			var item_amount = result.result.items.length;
			item_amount = item_amount - 1;
		}
		else {item_amount = 0}
		var insert_position, item_label;
		if (item_amount!=0){
			insert_position = 0;
			for (i=0;i<=item_amount;i++){
				item_label = result.result.items[i].label;
				if (item_label!=""){
					insert_position = i + 1; 
					
				}
			}
		}
		else {
			insert_position = 0;
			
		};
		var inserttoplaylist = '{"jsonrpc": "2.0", "method": "Playlist.Insert", "params":{"playlistid":1,"position":'+insert_position+',"item":{ "file" : "plugin://plugin.video.youtube/?action=play_video&videoid='+video_id+'"} }, "id": 1}';
		xbmcsend(inserttoplaylist,function( result ){});
		var playinserted = '{"jsonrpc": "2.0", "method": "Player.Open", "params":{"item":{"playlistid":1, "position" : '+insert_position+'}}, "id": 1}';
		xbmcsend(playinserted,function( result ){});
	});
}

function send_clear(){
	var clearplaylist = '{"jsonrpc": "2.0", "method": "Playlist.Clear", "params":{"playlistid":1}, "id": 1}';
	xbmcsend(clearplaylist,function( result ){
			var object_string = JSON.stringify(result);
	});
}
function send_playlist_start(video_id){
	send_clear();
	var inserttoplaylist = '{"jsonrpc": "2.0", "method": "Playlist.Insert", "params":{"playlistid":1,"position": 0,"item":{ "file" : "plugin://plugin.video.youtube/?action=play_video&videoid='+video_id+'"} }, "id": 1}';
	xbmcsend(inserttoplaylist,function( unused_result ){});

	var startplaylist = '{"jsonrpc": "2.0", "method": "Player.Open", "params":{"item":{"playlistid":1, "position" : 0}}, "id": 1}';
	xbmcsend(startplaylist,function( unused_result ){});
}
function send_playlist_plus(video_id){
	var addtoplaylist = '{"jsonrpc": "2.0", "method": "Playlist.Add", "params":{"playlistid":1,"item":{ "file" : "plugin://plugin.video.youtube/?action=play_video&videoid='+video_id+'"} }, "id": 1}';
        xbmcsend(addtoplaylist,function( unused_result ){});
}
