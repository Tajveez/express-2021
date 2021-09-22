const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('User Lists')
})

router.post('/', (req, res) => {
  res.send('User Post')
})

router.get('/new', (req, res) => {
  res.send('User New')
})

// new method
router.route('/:id')
    .get((req, res) => {
        res.send(`Get user with id: ${id}`)
    })
    .put((req, res) => {
        res.send(`Put user with id: ${id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with id: ${id}`)
    })

router.get('/:id', (req, res) => {
    res.send(`User with id: ${req.params.id}`)
})


module.exports = router