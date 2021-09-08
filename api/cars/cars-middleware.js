const Cars = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = (req, res, next) => {
  const { id } = req.params
  Cars.getById(id)
    .then(car => {
      if(car) {
        req.car = car
        next()
      } else {
        next({status: 404, message: `car with ${id} is not found`})
      }
    })
    .catch(next())
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  const { id } = req.params
  Cars.getById(id)
    .then(car => {
      if(!vin) {
        next({status: 404, message:`${vin} is missing`})
      } else if (!make) {
        next({status: 404, message:`${make} is missing`})
      } else if (!model) {
        next({status: 404, message:`${model} is missing`})
      } else if (!mileage) {
        next({status: 404, message:`${mileage} is missing`})  
    } else {
      req.car = car
      next()
    }
})
}

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body
  const { id } = req.params.id
  const valid = vinValidator.validate(vin)
  Cars.getById(id)
    .then(car => {
      if(!valid) {
        next({status: 400, message: `vin ${vin} is invalid`})
      } else {
        req.car = car
        next()
      }
    })
    .catch(next())
}

const checkVinNumberUnique = (req, res, next) => {
  const { vin } = req.body
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}