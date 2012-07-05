var host, port, username, password, connectstring;
updateSetting();
function updateSetting () {
	host = localStorage["host"];
	port = localStorage["port"];
	username = localStorage["username"];
	password = localStorage["password"];
	if (username){
		connectstring = 'http://' + username + ':' + password + '@' + host + ':' + port + '/jsonrpc'
	}
	else{
		connectstring = 'http://' + host + ':' + port + '/jsonrpc'
	}
}
chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		if (request.greeting == "requesthost")
		sendResponse({receivehost: connectstring});
	}
);
