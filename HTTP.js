//! HTTP - hyper text transfer protocol
//* URL, URI, URN

//? HTTP Header
// metadata = data about data (key-value pairs sent along req and res.)

//@ Used for caching , authentication and management of state.
//! X-prefix is depricated

//* Request Header - Client , Response Header - Server , Representational Header - encodind/ Compression , Payload Header - data.

//? Most Common Header
//Accept : application /json
// User-Agent (Browwser type , Os , Application)
// Authorization (Bearer)
// Content-Type
// Cookie
// Cache-Control

//? CORS
// Access-Control-Allow-Origin
// Access-Control-Allow-Credentials
// Access-Control-Allow-Method

//@ HTTP methods(Basic sets of operations that can be used to interact with server.)

// GET : retrieve a resources
// POST : interact with resource (mostly add)
// PUT : replace a resource
// PATCH : change a part of a resource.
// DELETE : remove a resource
// HEAD : No message body(header only)
// OPTIONS : what operations are available
// TRACE : loopback test(get same data)

//@ HTTP Status Code (Mostly given in company standards)

// 1xx Informational
// 2xx Success
// 3xx Redirection
// 4xx Client error
// 5xx Server error
