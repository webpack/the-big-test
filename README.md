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
node bin/webpack-dev-server "mocha!./test/client-tests"
```

and navigate your browser to [http://localhost:8082/](http://localhost:8082/).
