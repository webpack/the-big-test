onmessage = function(event) {
	require(["./identitiy"], function(identitiy) {
		if(module.hot) {
			postMessage(null);
		} else {
			postMessage(identitiy(event.data));
		}
		if(typeof __$coverObject !== "undefined")
			postMessage(JSON.stringify(__$coverObject));
	});
}
