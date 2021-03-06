'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return [
      {id: 'P1', name: 'Peloton Bike', rrp: '1999.99', info: 'This spin bike will wipe you out in a good way.'}
    ]
  })

  fastify.post('/', async function (request, reply) {
    request.mockDataInsert(opts.prefix.slice(1), data)
    return data
  })
}