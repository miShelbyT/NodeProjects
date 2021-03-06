'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
const cors = require('fastify-cors')

module.exports = async function (fastify, opts) {
  fastify.register(cors)
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}


// the only alteration we made was to include the fastify-cors plugin and register it with the fastify service instance. This will ensure that the same Access-Control-Allow-Origin HTTP header that we manually set in the last section will be added for every route we create.
