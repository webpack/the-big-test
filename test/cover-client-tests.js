require("./client-tests");

after(function() {
	require("coverjs-loader").reportHtml();
});