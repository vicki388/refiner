# refiner

CSV stream library for manipulating data

# Install

	$ npm install

# Example

```javascript
var refine = require('refiner')

fs.createReadStream('data/colorado5.csv')
    .pipe(csv.parse())
    .pipe(refine.skipfirst())
    .pipe(refine.head(2))
    .pipe(refine.print())
```

# Test

Run all test cases

	$ mocha 

Run a particular test case (-g)

	$ mocha -g head
	$ mocha -g sunrise

Resources

- BDD-style using [should](http://chaijs.com/api/bdd/)
- Assertion library for streams [stream-assert](https://www.npmjs.com/package/stream-assert)

# Test Data

* colorado.csv - colordo census data
* colorado5.csv - colordo census data (first five rows, use this for testing/debugging)
* insurance.csv - (36k+ rows)

# Examples

located in examples/
