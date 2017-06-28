
const assert = require( "assert" );
const offcache = require( "./offcache.js" );

const http = require( "http" );

http.createServer( function ( request, response ){

	console.log( offcache( response ) );

	response.writeHead( 200, { "Content-Type": "text/plain" } );

	response.write( "Hello World!" );

	response.end( );

} ).listen( "8080", "127.0.0.1" );
