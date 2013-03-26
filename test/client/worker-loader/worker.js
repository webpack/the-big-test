onmessage = function(event) {
	require(["./identitiy"], function(identitiy) {
		postMessage(identitiy(event.data));
		if(typeof __$coverObject !== "undefined")
			postMessage(JSON.stringify(__$coverObject));
	});
}
