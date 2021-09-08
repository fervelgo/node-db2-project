// DO YOUR MAGIC
const router = require('express').Router()

const Cars = require('./cars-model')

router.get('/',(req, res, next) => {
    Cars.getAll()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(res.json([]))
});

router.get('/:id', (req, res, next) => {
    Cars.getById(req.params.id)
        .then(car => {
            res.json(car)
        })
        .catch(next())
});

router.post('/', (req, res, next) => {
    Cars.create(req.body)
        .then(newCar => {
            res.json(newCar)
        })
        .catch(next())
});

module.exports = router