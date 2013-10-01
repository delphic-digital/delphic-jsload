dd-jsload
=============

On demand JavaScript loader that doesn't block.

## Features

* [LABjs](http://labjs.com/) performance script loader ( *the* best!).
* Custom wrapper and config object to make life easier.


## How to use

Include `LAB.min.js` and `delphic.LABwrapper.js` in that order on your page.

Config example:

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

* Use `paths` to declare where your JavaScript files should be loaded from. Can be any url, absolute or relative.
* Use `shortcuts` to declare dependecies with an array of `paths`. Order of array elements determines the order of load. 

When you need to use a JavaScript file, you use the defined path or shortcut variable from the config. 

To use a path, pass an array of path variables:

```Javascript
jsload(['jquery', 'jquery.easing'],function(){
	//Both jquery and jquery.easing have finished loading
})
```
Or, pass a shorcut variable as a string:

```Javascript
jsload('jqueryWithEasing',function(){
	//Both jquery and jquery.easing have finished loading
})
```

Those two function calls are equivalent.

