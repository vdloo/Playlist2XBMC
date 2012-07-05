function xbmcsend(jsonstring, callback){
	function getlocal(returnstorage){
		chrome.extension.sendRequest({greeting: "requesthost"}, function(response) {
			returnstorage( response.receivehost );
		});
	}
	getlocal(function(getresult){
		xbmchost = getresult;
		$.ajax({
			data: jsonstring,
			contentType: "application/json;charset=utf-8",
			dataType: 'json',
//			timeout: 500,
			jsonp: 'jsonp_callback',
			url: xbmchost,
			type: 'post',
			success: function ( result ){
				console.log( result );
				callback( result );
			},

			error: function ( result ){
				console.log( result );
				console.log('error!');
			}
		});
	});


}
