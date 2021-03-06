'use strict'

const data = [
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Delicious overpriced chocolate.'}
]

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return data
  })
  fastify.post('/', async function (request, reply) {
    request.mockDataInsert(opts.prefix.slice(1), data)
    return data
  })
}

// Fastify works by dividing the service up into plugins. A plugin is a module that exports a function. The exported function is passed a fastify instance and options. What we've created here is a route plugin (as opposed to a library plugin, which would go into the plugins folder).

// The fastify instance can be used to register a GET route by calling fastify.get. The fastify.get method is passed a string representing the path and route handler function. When the route handler is an async function (as ours is) whatever we return from that function is sent to the response. If a JavaScript object or array is returned, then Fastify converts it into a JSON response. We return an array containing the confectionery item from our mock data. For more on Fastify routing see the Fastify's Documentation.

// The name of the folder sets the path prefix for the route. So if we were to set up a GET route with fastify.get('/foo', …) then this would be mounted at /confectionery/foo. We set up a route fastify.get('/', …) so it's mounted at /confectionery/ or just /confectionery. One benefit of this is we can rename the folder at any time to update the top-level route without changing any code.