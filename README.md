dd-jsload
=============

On demand JavaScript loader that doesn't block.

## Features

* [LABjs](http://labjs.com/) performance script loader
* Custom wrapper and config object to make live easier


## How to use

Include `LAB.min.js` and `delphic.LABwrapper.js` in that order on your page.

```Javascript
var LABconfig = {
	paths: {
		'jquery'             : 'http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js',
		'jquery.easing'      : 'http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js'
	},
	shortcuts: {
		'jqueryWithEasing' : ['jquery','jquery.easing']
	}
}
```
