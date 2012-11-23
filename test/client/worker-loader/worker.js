onmessage = function(event) {
	postMessage(event.data);
	if(typeof __$coverObject !== "undefined")
		postMessage(JSON.stringify(__$coverObject));
}
