# the big webpack test

## Do tests in node.js

Single run:

``` text
node bin/enhanced-require "mocha!./test/server-tests"
```

Watching run:

``` text
node bin/enhanced-require-hot-watch "mocha!./test/server-tests"
```

## Do tests in browser

``` text
node bin/webpack-dev-server
```

and navigate your browser to [http://localhost:8080/](http://localhost:8080/).

## Cover browser run

``` text
node bin/webpack-dev-server --config cover-webpack.config.js
```

and navigate your browser to [http://localhost:8080/](http://localhost:8080/).
