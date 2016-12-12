"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "offcache",
			"path": "offcache/offcache.js",
			"file": "offcache.js",
			"module": "offcache",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/offcache.git",
			"test": "offcache-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Sets header to not cache the response data.

		Sets Cache-Control to no-cache, private, no-store, must-revalidate, proxy-revalidate,
			max-stale=0, post-check=0, pre-check=0

		Sets Expires to 0.

		Sets Pragma to no-cache.
	@end-module-documentation

	@include:
		{
			"clazof": "clazof",
			"http": "http",
			"falze": "falze",
			"protype": "protype"
		}
	@end-include
*/

const clazof = require( "clazof" );
const http = require( "http" );
const falze = require( "falze" );
const protype = require( "protype" );

const offcache = function offcache( response ){
	/*;
		@meta-configuration:
			{
				"response:required": "http.ServerResponse"
			}
		@end-meta-configuration
	*/

	if( falze( response ) || !clazof( response, http.ServerResponse ) ){
		throw new Error( "invalid response" );
	}

	if( !protype( response.setHeader, FUNCTION ) ){
		throw new Error( "invalid response" );
	}

	response.setHeader( "Cache-Control", [
		"no-cache",
		"private",
		"no-store",
		"must-revalidate",
		"proxy-revalidate",
		"max-stale=0",
		"post-check=0",
		"pre-check=0"
	] );

	response.setHeader( "Expires", "0" );

	response.setHeader( "Pragma", "no-cache" );

	return response;
};

module.exports = offcache;
