const uuid = require('uuid/v4')
const puppies = []

function getAll (limit) {
  return limit ? puppies.slice(0, limit) : puppy
}

function create (body) {
  const errors = []
  const name = body.name

  let response
  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const puppy = { id: uuid(), name }
    puppies.push(puppy)
    response = puppy
  }
  return response
}

function find (id) {
  const errors = []
  const myPuppy = puppies.find(puppies => puppies.id === id)

  let response
  if(!myPuppy) {
    errors.push('puppy not found')
    response = {errors}
  } else if (myPuppy) {
      response = {name: myPuppy.name, id: myPuppy.id}
  }
  return response
}

module.exports = { getAll, create, find }
