
const assert = require( "assert" );
const offcache = require( "./offcache.js" );

const http = require( "http" );

http.createServer( function onCreate( request, response ){
	
	assert.ok( offcache( response ) );

	response.writeHead( 200, { "Content-Type": "text/plain" } );

	response.end( "Hello World" );

} ).listen( 3000, function listening( ){
	console.log( "HTTP server running" );
} );
