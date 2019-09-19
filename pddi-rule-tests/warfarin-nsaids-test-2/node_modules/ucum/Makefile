all:  ucum-parser.js browserified

tests.json: lib/codegen.js
	node lib/codegen.js  --tests > generated/tests.json

metrics.json: lib/codegen.js
	node lib/codegen.js  --metrics > generated/metrics.json

prefixes.json: lib/codegen.js
	node lib/codegen.js  --prefixes > generated/prefixes.json

equivalents.json: lib/codegen.js
	node lib/codegen.js  --equivalents > generated/equivalents.json

ucum-essence.xml: lib/codegen.js
	node lib/codegen.js --cdataxml > generated/ucum-essence.xml

prefixMetadata.json: lib/codegen.js
	node lib/codegen.js  --prefixMetadata > generated/prefixMetadata.json

unitMetadata.json: lib/codegen.js
	node lib/codegen.js  --unitMetadata > generated/unitMetadata.json

ucum-parser.peg: lib/codegen.js
	node lib/codegen.js  --peg  > generated/ucum-parser.peg

ucum-parser.js: ucum-parser.peg  metrics.json equivalents.json prefixes.json ucum-essence.xml prefixMetadata.json unitMetadata.json tests.json
	./node_modules/pegjs/bin/pegjs  -o size generated/ucum-parser.peg   generated/ucum-parser.js

browserified: ucum-parser.js
	./node_modules/.bin/browserify  lib/entry.js > dist/ucum.js
