const uuid = require('uuid/v4')
const puppies = []

function getAll(limit) {
  return limit ? puppies.slice(0, limit) : puppies
}

function create(body) {
  const errors = []
  const name = body.name
  const color = body.color || "brown"
  const age = body.age || "young"

  let response
  if (!name) {
    errors.push('name is required')
    response = {
      errors
    }
  } else {
    const puppy = {
      id: uuid(),
      name,
      color,
      age,
    }
    puppies.push(puppy)
    response = puppy
  }
  return response
}

function find(id) {
  const errors = []
  const myPuppy = puppies.find(puppies => puppies.id === id)

  let response
  if (!myPuppy) {
    errors.push('puppy not found')
    response = {
      errors
    }
  } else if (myPuppy) {
    response = {
      name: myPuppy.name,
      id: myPuppy.id,
      color: myPuppy.color,
      age: myPuppy.age
    }
  }
  return response
}


function change(name) {
  const errors = []
  const changingPuppy = puppies.find(puppies => puppies.id === id)
  console.log(changingPuppy, name)
  let newResponse
  if (changingPuppy) {
    changingPuppy.name = name
    newResponse = changingPuppy
  } else if(!changingPuppy) {
    errors.push('puppy not found')
    newResponse = {
      errors
    }
  }
  return newResponse
}

module.exports = { getAll, create, find, change}
