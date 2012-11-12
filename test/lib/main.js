document.write("<div id=\"mocha\"></div>");

require("mocha/mocha.css");
require("script!mocha/mocha.js");

mocha.setup('bdd');

require("../shared/index.js");
require("../client/index.js");

mocha.run();