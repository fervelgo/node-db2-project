const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

async const getById = (id) => {
  const car = await db('cars').where('id', id).first()
  return car
}

async const create = (car) => {
  const [id] = await db('cars').insert(car)
  return getById(id)
}

module.exports = {
  getAll,
  getById,
  create
}
