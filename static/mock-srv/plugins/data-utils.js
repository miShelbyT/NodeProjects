'use strict'
const fp = require('fastify-plugin')

const catToPrefix = {
  electronics: 'A',
  confectionery: 'B'
}

const calculateID = (idPrefix, data) => {
  const sorted = [...(new Set(data.map(({id}) => id)))]
  const next = Number(sorted.pop().slice(1)) + 1
  return  ` ${idPrefix}${next} ` 
}

module.exports = fp(async function (fastify, opts) {
  fastify.decorateRequest('mockDataInsert', function insert (category, data) {
    const request = this
    const idPrefix = catToPrefix[category]
    const id = calculateID(idPrefix, data)
    data.push({id, ...request.body})
  })
})

// The this keyword of the insert function will be the request object on which it is called. This means we can access request.body to get the incoming payload of a POST request. We then modify the data array by pushing a new item object on to it containing our new ID and the request.body copied into the new item object using the spread operator (...).