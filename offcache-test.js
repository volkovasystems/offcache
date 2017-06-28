
const assert = require( "assert" );
const http = require( "http" );
const offcache = require( "./offcache.js" );

http.createServer( function onCreate( request, response ){

	assert.ok( offcache( response ) );

	response.writeHead( 200, { "Content-Type": "text/plain" } );

	response.end( "Hello World" );

} ).listen( 3000, function listening( ){
	console.log( "HTTP server running" );
} );
