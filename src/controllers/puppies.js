const model = require('../models/puppy')

function getAll (req, res, next) {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({ data })
}

function create (req, res, next) {
  const result = model.create(req.body)

  if (result.errors) {
    return next({ status: 400, message: `Could not create new puppy`, errors: result.errors })
  }

  res.status(201).json({ data: result })
}

function find (req, res, next) {
  const result = model.find(req.params.id)

  if(result.errors) {
    return next({ status: 400, message: `Could not find the puppy`, errors: result.errors })
  }
  res.status(201).json({ data: result })
}

module.exports = { getAll, create, find }
